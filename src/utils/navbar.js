import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './navbar.css';
class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="topbar">
                    <NavLink to="/home" className="links" activeStyle={{
                        textDecoration: "underline",
                        color: "whitesmoke"
                    }}>Home</NavLink>
                    <NavLink to="/blog" className="links" activeStyle={{
                        textDecoration: "underline",
                        color: "whitesmoke"
                    }}>Blog</NavLink>
                </div>
            </nav>
        )
    }
}

export default NavBar; 