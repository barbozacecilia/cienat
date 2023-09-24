import "./Header.css"
import { Link } from "react-router-dom"


function Header(){
    return (
        <header className="header" style={{backgroundColor: "#6278F7"}}>
            <div className="menu-hamburguer">
                <span className="menu-hamburguer__icon"></span>
            </div>
            <div className="header-container">
                <Link to={'/'}  className="flex flex--center">
                <img className="header__logo" src='./img/cienat-logo.png' alt="logo-cienat" />
                </Link>
            </div>
            <nav className="menu-header">
                <ul className="menu-items">
                    <li><Link className="menu-item" to="/add-new-category">Agregar Nueva Categoria</Link></li>
                    <li><Link className="menu-item" to="/add-new-video">Agregar un Nuevo Video</Link></li>
                </ul>
                <ul>
                <li><Link className="menu-item menu-item--entrar" to="#">Entrar</Link></li>
                </ul>
            </nav>
            <div className="menu-header-background"></div>
        </header>
    )
}

export default Header