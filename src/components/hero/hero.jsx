import HeroImg from '../../assets/profile-portrait.jpg';
import './hero.css';

function Hero() {
    function scrollToSection(sectionId) {
        document.getElementById(sectionId).scrollIntoView({
            behavior: 'smooth',
        });
    }
    return (
        <div className="main-section">
            <img className="headshot" src={HeroImg} alt="John headshot" />
            <div class="introduction">
                <h1>Hi, I'm John</h1>
                <p>I am a Software Developer based in Chattanooga, TN</p>
                <p>Check out my work!</p>
                <div class="bounce">
                    <i
                        class="arrow"
                        onClick={() => scrollToSection('work')}
                    ></i>
                </div>
            </div>
        </div>
    );
}

export default Hero;
