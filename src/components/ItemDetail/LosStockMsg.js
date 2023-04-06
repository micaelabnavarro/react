

 export const LowStockMsg = ({stock}) => {
    return (
        <p><strong>
                    {
                        item.stock === 1
                        ? `Queda sólo 1 unidad`
                        : `Quedan solo ${stock} unidades!`


                    }
                </strong></p>
    )
}

export default LowStockMsg