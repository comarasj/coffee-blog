import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
class NavBar extends Component {
    render() {
        return (
            <nav>
                <div className="topbar">
                    <Link to="/" className="links">Home</Link>
                    <Link to="/blog" className="links">Blog</Link>
                </div>
            </nav>
        )
    }
}

export default NavBar; 