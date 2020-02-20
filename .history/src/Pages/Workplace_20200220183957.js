import {Route, Link} from 'react-router-dom'
import React from 'react';
import Money from './workplace/Money'
import Getup from './workplace/Getup'


function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/workplace/money"></Link></li>
                    <li><Link to="/workplace/getup">Flutter教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场软技能</h3></div>
                <Route path="/workplace/money/" component={Money}/>
                <Route path="/workplace/getup/" component={Getup}/>
            </div>
        </div>

    )
}

export default Video