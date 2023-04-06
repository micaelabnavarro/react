import CardWidget from '../CartWidget/CartWidget'
import logo from './logo.png'
import './Navbar.css'
import { Link } from 'react-router-dom'


export const NavBar = ({black}) => {
    return (
      <header className="header" style={{backgroundColor: black ? '#000000' : '#600027C5'}}>
        <div className="header__container">
            <h1 className="header-inicio">Home</h1>
            <Link to="/">
            <img src={logo} alt="logo" className='header__logo'/>
            </Link>
            <nav className="navbar">
                <Link to="/" className="navbar__link">Inicio</Link>
                <Link to="/productos/perfumeria" className="navbar__link">Perfumeria</Link>
                <Link to="/productos/panaderia" className="navbar__link">Panaderia</Link>
                <Link to="/productos/verduleria" className="navbar__link">Verduleria</Link>
                <Link to="/productos/carniceria" className="navbar__link">Carniceria</Link>
                <Link to="/productos/limpieza" className="navbar__link">Limpieza</Link>
                <Link to="/nosotros" className="navbar__link">Nosotros</Link>
                <Link to="/contacto" className="navbar__link">Contacto</Link>
            </nav>
           {<CardWidget />} 
        </div>
      </header>
    )
}

export default NavBar