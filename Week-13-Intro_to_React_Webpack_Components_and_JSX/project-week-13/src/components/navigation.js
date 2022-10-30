import React from "react";

export default class Navigation extends React.Component {
    render(){
        return (<nav className="crumbs">
            <ol>
                <li className="crumb"><a href="#">Home </a>
                </li>
                <li className="crumb"><a href="#">Log In </a>
                </li>
            </ol>
        </nav>
        
        );        
    }
}