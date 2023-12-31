import "./components.css"
import CartWidget from "../CartWidget/CartWidget"
import { Link } from "react-router-dom";
const Navbar = () => {

    return(
    <div className="navbar"> 
<ul>
    <li>
    <Link to={"/"}>Home</Link>
    </li>
    <li className="navbar">
    <a href="#">Productos</a>
    <ul className="submenu">
    <li>
    <Link to={"/ItemListContainer/camisetas"}>Camisetas</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/shorts"}>Shorts</Link>
    </li>
    <li>
    <Link to={"/ItemListContainer/conjuntos"}>Conjuntos</Link>
    </li>
    </ul>
    </li>
    <li>
    <Link to={"/Contact"}>Contacto</Link>
    </li>
    <li className="Cart">
    <Link to={"/Cart"}><CartWidget/></Link>
    </li>
</ul>
    
    </div>)
}

export default Navbar
