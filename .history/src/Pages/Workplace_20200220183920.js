import {Route, Link} from 'react-router-dom'
import React from 'react';
import Money from './workplace/Money'
import Getup from './workplace/Getup'


function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="/video/reactPage">React教程</Link></li>
                    <li><Link to="/video/flutter">Flutter教程</Link></li>
                    <li><Link to="/video/vue">Vue教程</Link></li>
                </ul>
            </div>
            <div className="videoContent">
                <div><h3>职场软技能</h3></div>
                <Route path="/workplace/money/" component={Money}/>
                <Route path="/workplace/getup/" component={Getup}/>
                <Route path="/video/vue/" component={Vue}/>
            </div>
        </div>

    )
}

export default Video