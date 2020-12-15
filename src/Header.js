import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import logo from './assets/staticLogo.png';
import FaceBookButton from './Facebook';

function Header() {
    return (
        <div className="Header">
            <h2 className="Header-title">
                <Link to="/HomePage">
                    <img
                        className="static-logo"
                        src={logo}
                        alt="Benson AutoBody Logo"
                    />
                </Link>
                <Link to="/" style={{ textDecoration: 'none' }}>
                    <button className="Header-title">
                        Benson AutoBody & Glass
                    </button>
                </Link>
            </h2>

            <ul>
                <Link>
                    <li className="Navigation-buttons-header">
                        <Link to="/HomePage">
                            <button className="Navigation-buttons">Home</button>
                        </Link>
                        <Link to="/AboutPage">
                            <button className="Navigation-buttons">
                                About
                            </button>
                        </Link>
                        <Link to="/DirectionsPage">
                            <button className="Navigation-buttons">
                                Directions
                            </button>
                        </Link>
                        <Link to="/PicturesPage">
                            <button className="Navigation-buttons">
                                Pictures
                            </button>
                        </Link>
                        <Link to="/Facebook" target="_blank">
                            <button className="Navigation-buttons">
                                <FaceBookButton />
                            </button>
                        </Link>
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Header;
