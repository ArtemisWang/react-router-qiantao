import {Route, Link} from 'react-router-dom'
import React from 'react';
import Reactpage from './video/ReactPage'
import Flutter from './video/Flutter'
import Vue from './video/Vue'


function Video(){
    return (
        <div>
            <div className="topNav">
                <ul>
                    <li><Link to="">React教程</Link></li>
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