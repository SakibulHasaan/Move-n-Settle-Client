import React, { useContext, useEffect, useState } from 'react';
import './NavBar.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { UserContext } from '../../App';
const NavBar = () => {

    const [sidebar, setSidebar] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);

    const showSideBar = () => {
        setSidebar(!sidebar);
    }

    const hideSideBar = () => {
        setTimeout(() => {
            setSidebar(!sidebar);
        }, 100)
    }

    return (
        <nav className="nav-bar">
            <Link to="/"><img src={logo} alt="" /></Link>
            <div className={sidebar ? "nav-links active" : "nav-links"} id="navBarLinks" >
                <FontAwesomeIcon className="icon" onClick={showSideBar} icon={faTimes} />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="#services">Services</Link></li>
                    <li><Link to="#blog">Blog</Link></li>
                    <li><Link to="#blog">About</Link></li>
                    {
                        loggedInUser.UserName ? <li><Link to="login" >{loggedInUser.UserName}</Link></li> : <li><Link to="/login">login</Link></li>
                    }
                </ul>
            </div>
            <button class="icon-button" onFocus={showSideBar} onBlur={hideSideBar} ><FontAwesomeIcon className="icon" icon={faBars} /></button>
        </nav>
    );
};
export default NavBar;