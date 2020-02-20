import {Route, Link} from 'react-router-dom'
import React from 'react';
import Money from './workplace/Money'
import Flutter from './video/Flutter'
import Vue from './video/Vue'


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
                <div><h3>视频教程</h3></div>
                <Route path="/video/reactPage/" component={Reactpage}/>
                <Route path="/video/flutter/" component={Flutter}/>
                <Route path="/video/vue/" component={Vue}/>
            </div>
        </div>

    )
}

export default Video