import { useState } from "react"
import { useNavigate } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CartContext } from "../context/CartContext"


const colores = [
    {
        value: "red",
        label: "Rojo"
    },
    {
        value: "blue",
        label: "Azul"
    },
    {
        value: "green",
        label: "Verde"
    },
    {
        value: "black",
        label: "Negro"
    },
    {
        value: "white",
        label: "Blanco"
    }

]

const ItemDetail = ({ item }) => {

    const { agregarAlcarrito, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)
    //const [color, setColor] = useState(null)

    const navigate = useNavigate()

    const handleVolver = () => {
        navigate(-1)
    }

    const handleAgregar = () => {
        const newItem = {
            ...item,
            cantidad
        }


        agregarAlcarrito(newItem)


    }



    return (
        <div className="container my-5">
            <h2>{item.name}</h2>
            <img src={item.img} alt={item.name} />
            <p>{item.descripcion}</p>
            <p>Precio: ${item.precio}</p>
            <ColorPicket setColor={setColor} options={colores} />
            {  item.stock <= 5 && <lowStockMsg stock={item.stock}/> }


            {
                isInCart(item.id)
                    ? <Link to="/cart" className="btn btn-success" />
                    : <ItemCount
                        max={item.stock}
                        cantidad={cantidad}
                        setCantidad={setCantidad}
                        onAdd={handleAgregar}
                    />



            }
            <br/>
            <buttom onClick={handleVolver} className="btn btn-primary">Volver</buttom>

        </div>
    )
}

export default ItemDetail