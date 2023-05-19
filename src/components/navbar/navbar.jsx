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

    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
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
                        <Link
                            to=""
                            className="nav-link"
                            onClick={() => scrollToSection('work')}
                        >
                            Work
                        </Link>
                        <Link
                            className="nav-link"
                            onClick={() => scrollToSection('footer')}
                        >
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
                <Link to="" className="nav-link" onClick={toggleDropdown}>
                    Work
                </Link>
                <Link to="/about" className="nav-link" onClick={toggleDropdown}>
                    About
                </Link>
                <Link
                    to="/contact"
                    className="nav-link"
                    onClick={toggleDropdown}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
