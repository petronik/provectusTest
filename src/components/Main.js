import React from 'react';
import hotdog from '../img/hotdog.svg'
const Main =() => {
        return(
            <div className="main">
                <img className="image" src={hotdog} alt="hotdog"/>
                    <h1 className="text">Dirty Dogs serves all-beef, vegan and vegatagian hot dogs.</h1>
                    <button className="btn btn-primary myBtn">More Dogs ‘n Make Em Hot</button>
            </div>
        )
    };



export default Main;