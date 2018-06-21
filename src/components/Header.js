import React from 'react';
import {NavLink} from 'react-router-dom'
const Header =() => {
        return (
            <div className="header">
                <div className="gallery d-flex flex-nowrap">
                    <img className="responsive" src="i/photo1.jpg" alt="burger"/>
                        <img className="responsive" src="/assets/i/photo2.jpg" alt="burger"/>
                            <img className="responsive" src="/assets/i/photo3.jpg" alt="burger"/>
                                <img className="responsive" src="/assets/i/photo4.jpg" alt="burger"/>
                                    <img className="responsive" src="/assets/i/photo1.jpg" alt="burger"/>
                                        <img className="responsive" src="/assets/i/photo2.jpg" alt="burger"/>

                </div>
                <div className="gallery d-flex flex-nowrap">
                    <img className="responsive" src="/assets/i/photo5.jpg" alt="burger"/>
                        <img className="responsive" src="/assets/i/photo6.jpg" alt="burger"/>
                            <img className="responsive" src="/assets/i/photo7.jpg" alt="burger"/>
                                <img className="responsive" src="/assets/i/photo8.jpg" alt="burger"/>
                                    <img className="responsive" src="/assets/i/photo5.jpg" alt="burger"/>
                                        <img className="responsive" src="/assets/i/photo6.jpg" alt="burger"/>

                </div>
                <ul className="nav justify-content-center myNav">
                    <li className="nav-link text-uppercase myA">
                        <NavLink exact activeStyle={{background: 'orange', borderRadius: '5px', padding:'5px'}} to="/">
                            menu
                        </NavLink>
                    </li>
                    <li className="nav-link text-uppercase myA"><NavLink to="/">catering</NavLink></li>
                    <li className="nav-link text-uppercase myA"><NavLink to="/">about us</NavLink></li>
                    <li className="nav-link text-uppercase myA">
                        <NavLink activeStyle={{background: 'orange', borderRadius: '5px', padding:'5px'}} to="/contact">
                            contact
                        </NavLink>
                    </li>

                </ul>
            </div>
        )
    };



export default Header