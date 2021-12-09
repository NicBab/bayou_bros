import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { IconContext } from 'react-icons'
import * as TiIcons from "react-icons/ti";
import * as AiIcons from "react-icons/ai";
import './css/Nav.css'
import { NavData } from './NavData';

const Nav = () => {
    const [menu, setMenu] = useState(false)
    const showMenu = () => setMenu(!menu)

    return (
        <>
        <IconContext.Provider value={{ color: "#fff"}}>
            <div id="nav">
                <Link to="#" className="burger">
                    <TiIcons.TiThMenu onClick={showMenu} />
                </Link>
                <nav className={menu ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items" onClick={showMenu}>
                        <li className="nav-toggle">
                            <Link to="#" className="closeIcon">
                                <AiIcons.AiOutlineCloseCircle />
                            </Link>
                        </li>
                        {NavData.map((item, index) => {
                            return(
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })}
                    </ul>
                </nav>
            </div>
        </IconContext.Provider>
        </>
    )
}

export default Nav

