import { NavLink } from "react-router-dom";

const Nav = () => <nav>
    <div className='header__navLink'>    
    <ul>    
        <li className="header__navElement"><NavLink to="/">Home</NavLink></li>
        <li className="header__navElement"><NavLink to="misdemeanour">Misdemeanour</NavLink></li>
        <li className="header__navElement"><NavLink to="confess">Confess To Us</NavLink></li>        
    </ul>
    </div>
</nav>;
export default Nav;