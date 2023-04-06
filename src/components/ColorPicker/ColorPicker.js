

const ColorPicker = () => {
    const handleSelect = (e) => {
        console.log(e)
    }


    return (
        <select onChange={handleSelect}>
            <option value={"rojo"}>Rojo</option>
            <option value={"Verde"}>Verde</option>
            <option value={"Azul"}>Azul</option>
        </select>
    )
}

export default ColorPicker