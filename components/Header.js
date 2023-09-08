import React from "react";
import "./Header.css"

const Header = () => {
    return (
        <>
            <div className="header">
                <div className="logo">
                    <h1>My App</h1>
                </div>
                <div className="menu">
                    <h4>Home</h4>
                    <h4>Courses</h4>
                    <h4>About</h4>
                    <h4>SignUp</h4>
                </div>
            </div>
        </>
    )
}

export default Header