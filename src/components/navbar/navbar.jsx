import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import HTML from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/JScript.png';
import REACT from '../../assets/REACTJS.png';

import './navbar.css';

function Navbar() {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    function toggleDropdown() {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <nav>
            <div className="nav-container">
                <div className="menu-container">
                    <button className="hamburger" onClick={toggleDropdown}>
                        ☰
                    </button>

                    <h3>JOHN GIBBS</h3>

                    <div className="nav-links">
                        {/* Navigation links as <Link> elements on desktop */}
                        <Link to="#work" className="nav-link">
                            Work
                        </Link>
                        <Link to="#footer" className="nav-link">
                            Contact
                        </Link>
                    </div>
                </div>
                <div className="tech-container">
                    <img src={HTML} alt="HTML logo" />
                    <img src={CSS} alt="CSS logo" />
                    <img src={JS} alt="JS logo" />
                    <img src={REACT} alt="React logo" />
                </div>
            </div>
            <div
                className={`hamburger-list-container ${
                    isDropdownOpen ? '' : 'hidden'
                }`}
            >
                <a
                    href="#work"
                    className="nav-link mobile-link"
                    onClick={toggleDropdown}
                >
                    Work
                </a>
                <a
                    href="#footer"
                    className="nav-link mobile-link"
                    onClick={toggleDropdown}
                >
                    Contact
                </a>
            </div>
        </nav>
    );
}

export default Navbar;
