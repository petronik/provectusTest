import React from 'react';
import {NavLink} from 'react-router-dom'
import photo1 from '../img/photo1.jpg'
import photo2 from '../img/photo2.jpg'
import photo3 from '../img/photo3.jpg'
import photo4 from '../img/photo4.jpg'
import photo5 from '../img/photo5.jpg'
import photo6 from '../img/photo6.jpg'
import photo7 from '../img/photo7.jpg'
import photo8 from '../img/photo8.jpg'
const Header =() => {
        return (
            <div className="header">
                <div className="gallery d-flex flex-nowrap">
                    <img className="responsive" src={photo1} alt="burger"/>
                        <img className="responsive" src={photo2} alt="burger"/>
                            <img className="responsive" src={photo3} alt="burger"/>
                                <img className="responsive" src={photo4} alt="burger"/>
                                    <img className="responsive" src={photo1} alt="burger"/>
                                        <img className="responsive" src={photo2} alt="burger"/>

                </div>
                <div className="gallery d-flex flex-nowrap">
                    <img className="responsive" src={photo5} alt="burger"/>
                        <img className="responsive" src={photo6} alt="burger"/>
                            <img className="responsive" src={photo7} alt="burger"/>
                                <img className="responsive" src={photo8} alt="burger"/>
                                    <img className="responsive" src={photo5} alt="burger"/>
                                        <img className="responsive" src={photo6} alt="burger"/>

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