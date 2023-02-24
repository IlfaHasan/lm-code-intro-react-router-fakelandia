import { NavLink } from "react-router-dom";
import './App.css'

const Nav = () => <nav>
    <div className='header__navLink'>    
    <ul>    
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="misdemeanour">Misdemeanour</NavLink></li>
        <li><NavLink to="confess">Confess To Us</NavLink></li>        
    </ul>
    </div>
</nav>;
export default Nav;