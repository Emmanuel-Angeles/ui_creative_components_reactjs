import React from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../img/logo_emmy_webgi.png'

const Header = () => {
    return (
        <header className='header'>
            <div className='header_container'>
                <div className='logo'>
                    <figure className='logo_figure'>
                        <img src={logo} alt="Logo Emmy WEBGi" />
                    </figure>
                </div>
                <nav className='nav'>
                    <ul>
                        <li>
                            <NavLink
                                to='/'
                                className={({ isActive }) => isActive ? 'link activeItem' : 'link' }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='Modal'
                                className={({ isActive }) => isActive ? 'link activeItem' : 'link' }
                            >
                                Modal
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to='Pokeapi'
                                className={({ isActive }) => isActive ? 'link activeItem' : 'link' }
                            >
                                Pokeapi
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header