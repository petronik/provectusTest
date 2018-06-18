import React from 'react';
import {NavLink} from 'react-router-dom'
const Header =() => {
        return (
            <div className="header">
                <div className="gallery d-flex flex-nowrap">
                    <img className="responsive" src="/assets/i/photo1.png" alt="burger"/>
                        <img className="responsive" src="/assets/i/photo2.png" alt="burger"/>
                            <img className="responsive" src="/assets/i/photo3.png" alt="burger"/>
                                <img className="responsive" src="/assets/i/photo4.png" alt="burger"/>
                                    <img className="responsive" src="/assets/i/photo1.png" alt="burger"/>
                                        <img className="responsive" src="/assets/i/photo2.png" alt="burger"/>

                </div>
                <div className="gallery d-flex flex-nowrap">
                    <img className="responsive" src="/assets/i/photo5.png" alt="burger"/>
                        <img className="responsive" src="/assets/i/photo6.png" alt="burger"/>
                            <img className="responsive" src="/assets/i/photo7.png" alt="burger"/>
                                <img className="responsive" src="/assets/i/photo8.png" alt="burger"/>
                                    <img className="responsive" src="/assets/i/photo5.png" alt="burger"/>
                                        <img className="responsive" src="/assets/i/photo6.png" alt="burger"/>

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