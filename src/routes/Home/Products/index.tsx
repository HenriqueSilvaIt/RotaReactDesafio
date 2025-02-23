 import { Outlet } from 'react-router-dom';
import './style.css'
import { NavLink } from 'react-router-dom';

export default function Products() {

    return(
        <> 
        
        <section>
            <nav className="rNav-product-container rMt20 rContainer">
            <NavLink to="/products/computers" className={({isActive}) => isActive ? "rActive rMenuItem" : "rMenuItem"}>
                <p>Computadores</p>
            </NavLink>
            <NavLink to="/products/eletronics" className={({isActive}) => isActive ? "rActive rMenuItem" : "rMenuItem"}>
            <p>Eletrônicos</p>
            </NavLink>
            <NavLink to="/products/books" className={({isActive}) => isActive ? "rActive rMenuItem" : "rMenuItem"}>
            <p>Livros</p>
            </NavLink>
            </nav>
            <Outlet/>
        </section>
        </>
    );
}