import { addDoc, collection, updateDoc } from "firebase/firestore"


const Checkout = () => {

    const { cart, totalCompra, emptyCart } = useContext(CartContext)

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        direccion: '',
        email: ''
    })

    const handleInputChange = (e) => {
        console.log(e.target.value)

        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if(values.nombre.lenght < 3){
            alert("Nombre Invalido")
            return
        }
        if(values.direccion.lenght < 3){
            alert("Direccion Invalido")
            return
        }
        if(values.email.lenght < 3){
            alert("Email Invalido")
            return
        }

        const orden = {
            cliente: values,
            items: cart.map((prod) => ({id: prod.id, price: prod.price, cantidad: prod.cantidad, name: prod.name})),
            total: totalCompra(),
            fecha: new Date()
        }

        const productosRef = collection(db, 'productos')
        cart.forEach((item) => {
            const docRef = doc(productosRef, item.id)

            getDoc(docRef)
            .then((doc) => {
                if (doc.data().stock >= item.cantidad) {
                    updateDoc(docRef, {
                        stock: doc.data().stock - item.cantidad

                    })
                } else {
                    alert("No hay stock de" + item.name)
                }
                   
                
            })
        })

        const ordersRef = collection(db, 'oders')
        addDoc(ordersRef, orden)
        .then((doc) => {
            setOrderId(doc.id)
            vaciarCarrito()

        })
    
    }

    if(orderId) {
        return (
            <div className="container my-5">
                <h2>Tu orden se registro exitsamente</h2>
                <hr/>
                <p>Conserva tu numero de orde: {orderId}</p>

            </div>
        )
    }
     if (cart.length === 0) {
        return <Navigate to="/"/>
     }

    return (
        <div className="container my-5">
            <h2>Checkout</h2>
            <hr/>

            <form onSubmit={handleSubmit}>
                <input
                onChange={handleInputChange}
                value={values.nombre}
                type={'text'}
                placeholder="Ingrese su nombre"
                className="form-control my-2"
                name="nombre"
                />
                <input
                onChange={handleInputChange}
                value={values.direccion}
                type={'text'}
                placeholder="Ingrese su direccion"
                className="form-control my-2"
                name="direccion"
                />
                <input
                onChange={handleInputChange}
                value={values.email}
                type={'email'}
                placeholder="Ingese su email"
                className="form-control my-2"
                name="email"
                />
                <buttom className="btn btn-primary" type="submit">Enviar</buttom>
            </form>

        </div>
    )
}