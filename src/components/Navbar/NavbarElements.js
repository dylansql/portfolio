import React from 'react'
import { NavLink } from 'react-router-dom'
import './NavbarElements.css'
import ButtonMailto from './mailto'


const Navbar = () => {






    return (
        <>
            <nav> 
                <div className="all-links"> 
                    <div className="nav-links">
                        <div className="link">
                        <NavLink to="/" activeStyle>
                            Home
                        </NavLink>
                        </div>
                        <div className="link">
                        <NavLink to="/work" activeStyle>
                            Work
                        </NavLink>
                        </div>
                        <div className="link">
                        <NavLink to="/aboutme" activeStyle>
                            About Me
                        </NavLink>
                        </div>
                        <div className="link">
                        <NavLink to="/" activeStyle>
                            <ButtonMailto label="Contact" mailto="mailto:dylanbogerr@outlook.com">Contact</ButtonMailto>
                        </NavLink>
                        </div>
                        {/* <NavLink to="/freelance" activeStyle>
                            Freelance
                        </NavLink> */}
                    </div>
                {/* <div className="middle-logo">
                    <Link to="/">Place Holder</Link>
                </div> */}
                    <div className="logo-links">
                    <a href="https://twitter.com/dylansqll"><img src="https://www.pinclipart.com/picdir/big/578-5789236_twitter-clipart.png" alt="twitter-logo" style={{height: "25px", width: "30px"}} /></a>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar
