import './style.css';
import homeImg from '../../assets/hom.svg';
import { NavLink } from 'react-router-dom';

export default function Header() {

    return (
        <header className="rHeader">
            <nav className="rPrincipalContainer rContainer">

                <div className="rPrincipal-menu">
                    <NavLink to="/home" className={({isActive}) => isActive ? "rActive rPrincipal-menu" : "rPrincipal-menu"}>
                    <p>Início</p>
                    </NavLink>
                    <NavLink to="/products" className={({isActive}) => isActive ? "rActive rPrincipal-menu" : "rPrincipal-menu"}>
                    <p>Produtos</p>
                    </NavLink>
                    <NavLink to="/about" className={({isActive}) => isActive ? "rActive rPrincipal-menu" : "rPrincipal-menu"}>
                    <p>Sobre Nós</p>
                    </NavLink>
                </div>
                <NavLink to="/home" className={({isActive}) => isActive ? "rActive rPrincipal-menu" : "rPrincipalMenu"} >
                <div>
                    <img src={homeImg} alt="hom" />
                </div>
                </NavLink>
            </nav>
        </header>
    );
}