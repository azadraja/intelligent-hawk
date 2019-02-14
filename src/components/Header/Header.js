import React from 'react';
import { Link } from 'react-router-dom'

export const Header = ({isMobileMenuActive, handleClick}) => {
    return (
        <div className="App">
            <nav className="navbar is-info" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <Link className="navbar-item" to="/">
                        Intelligent Hawk
                    </Link>
                    <a role="button" onClick={handleClick} className={`navbar-burger burger ${isMobileMenuActive ? 'is-active' : ''}`} aria-label="menu" aria-expanded="false" data-target="intelligenthawkmenu">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>
                <div id="intelligenthawkmenu" className={`navbar-menu ${isMobileMenuActive ? 'is-active' : ''}`}>
                    <div className="navbar-start">
                        <Link to="/" className="navbar-item">
                            Home
                        </Link>
                        <Link to="/details" className="navbar-item">
                            Details
                        </Link>
                        <Link to="/about" className="navbar-item">
                            About Us
                        </Link>
                    </div>
                </div>
            </nav>
        </div>
      );
}