import { useEffect } from 'react'
import { useState } from 'react'
import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import { collection, getDocs, query, where } from '@firebase/firestore'
import { db } from '../../Firebase/firebase'



const ItemListContainer = () => {


    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    const { categoriaId } = useParams()

    useEffect(() => {
        setLoading(true)        
        
        const productosRef = collection(db, "productos")
        const q = categoriaId
                      ? query(productosRef, where("categoria", "==", "categoriaId"))
                      : productosRef
        getDocs(q)
        .then((res) => {
           const docs = res.docs.map((doc) => {
            return {...doc.data(), id: doc.id}
                

            })
            setProductos(docs)
            
        })
        .finally(() => {
            setLoading(false)
        })
        
        

       

    }, [categoriaId])

    return (
        <div className='contenedor'>
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={productos} />
            }
        </div>
    )

}
export default ItemListContainer