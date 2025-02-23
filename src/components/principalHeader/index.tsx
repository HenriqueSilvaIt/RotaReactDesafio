import './style.css';
import homeImg from '../../assets/hom.svg';

export default function Header() {

    return (
        <header className="rHeader">
            <nav className="rPrincipalContainer rContainer">

                <div className="rPrincipal-menu">
                    <p>Início</p>
                    <p>Produtos</p>
                    <p>Sobre Nós</p>
                </div>
                <div>
                    <img src={homeImg} alt="hom" />
                </div>
            </nav>
        </header>
    );
}