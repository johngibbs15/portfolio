import HTML from '../../assets/HTML5.png';
import CSS from '../../assets/CSS.png';
import JS from '../../assets/JScript.png';
import REACT from '../../assets/REACTJS.png';

import './navbar.css';

import { Link } from 'react-router-dom';

function Navbar() {
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
    }
    return (
        <nav>
            <div className="nav-container">
                <div className="menu-container">
                    <button className="hamburger">☰</button>
                    <Link style={{ textDecoration: 'none' }} to="/">
                        <h3>JOHN GIBBS</h3>
                    </Link>
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
            <div className="hamburger-list-container hidden">
                <Link to="" className="nav-link">
                    Work
                </Link>
                <Link to="/about" className="nav-link">
                    About
                </Link>
                <Link to="/contact" className="nav-link">
                    Contact
                </Link>
            </div>
        </nav>
    );
}

export default Navbar;
