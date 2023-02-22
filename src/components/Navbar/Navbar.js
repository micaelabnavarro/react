import './Navbar.css'


export const NavBar = () => {
    return (
      <header className="header">
        <div className="header-div">
            <h1 className="header-inicio">Home</h1>
            <nav className="navbar">
                <a href="#" className="navbar-link">Inicio</a>
                <a href="#" className="navbar-link">Sobre Nosotros</a>
                <a href="#" className="navbar-link">Productos</a>
                <a href="#" className="navbar-link">Empresa</a>
            </nav>
        </div>
      </header>
    )
}

export default NavBar