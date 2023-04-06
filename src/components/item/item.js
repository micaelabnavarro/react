

const Item = ( {item}) => {
    return (
        <div className='col-3 m-1'>
        <img src={el.img} alt={el.name}/>
        <h4>{el.name}</h4>
        <p>{el.descripcion}</p>
        <p>Pecio: <strong>${el.precio}</strong></p>
        <buttom className= "btn btn-primary">Ver más</buttom>
        </div>
       
    )
}

export default Item