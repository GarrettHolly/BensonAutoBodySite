import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <div className="Header">
            <h2 className="Header-title">
                <Link to="/">
                    <button className="Header-title">Benson AutoBody</button>
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
                    </li>
                </Link>
            </ul>
        </div>
    );
}

export default Header;
