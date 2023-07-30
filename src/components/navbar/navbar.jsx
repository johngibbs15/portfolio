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

    function handleLinkClick() {
        setIsDropdownOpen(false);
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
                        {/* Navigation links as <Link> elements on desktop */}
                        <Link
                            to="#work"
                            className="nav-link"
                            onClick={() => {
                                handleLinkClick();
                                scrollToSection('work'); // Scroll to the 'work' section
                            }}
                        >
                            Work
                        </Link>
                        <Link
                            to="#footer"
                            className="nav-link"
                            onClick={() => {
                                handleLinkClick();
                                scrollToSection('footer'); // Scroll to the 'footer' section
                            }}
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
                <Link
                    to="#work"
                    className="nav-link"
                    onClick={() => {
                        handleLinkClick();
                        scrollToSection('work'); // Scroll to the 'work' section
                    }}
                >
                    Work
                </Link>
                <Link
                    to="#footer"
                    className="nav-link"
                    onClick={() => {
                        handleLinkClick();
                        scrollToSection('footer'); // Scroll to the 'footer' section
                    }}
                >
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
