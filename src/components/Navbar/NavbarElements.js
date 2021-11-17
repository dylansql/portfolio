import React from 'react'
import { NavLink, Link } from 'react-router-dom'
import './NavbarElements.css'

const Navbar = () => {
    return (
        <>
            <nav> 
                <div className="all-links"> 
                    <div className="nav-links">
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        <NavLink to="/aboutme" activeStyle>
                            About Me
                        </NavLink>
                        <NavLink to="/work" activeStyle>
                            Work
                        </NavLink>
                        <NavLink to="/freelance" activeStyle>
                            Freelance
                        </NavLink>
                    </div>
                <div className="middle-logo">
                    <Link to="/">Place Holder</Link>
                </div>
                    <div className="logo-links">
                    <Link to="https://twitter.com/dylansqll"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLFzDoUTxXStvqtcsyi3S9e1oSVliP53ZS6w&usqp=CAU" style={{height: "25px", width: "25px"}} /></Link>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
