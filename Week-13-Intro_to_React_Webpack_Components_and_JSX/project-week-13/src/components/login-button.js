import React from "react";

export default class LoginButton extends React.Component {
    render(){
        return <button className="btn btn-primary" onClick={function(){
            console.log("click");
        }}>Log In</button>;
    }
}