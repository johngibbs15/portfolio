import Twitter from '../../assets/TWITTER.svg';
import GitHub from '../../assets/GITHUB.svg';
import LinkedIn from '../../assets/LINKEDIN.svg';

import './socials.css';

function Socials() {
    return (
        <div className="socials">
            <a
                href="https://twitter.com/jonegibbs15"
                rel="noreferrer"
                target="_blank"
            >
                <img src={Twitter} alt="twitter" />
            </a>
            <a
                href="https://www.linkedin.com/in/john-gibbs-842a89200/"
                rel="noreferrer"
                target="_blank"
            >
                <img src={LinkedIn} alt="linked-in" />
            </a>
            <a
                href="https://github.com/johngibbs15"
                rel="noreferrer"
                target="_blank"
            >
                <img src={GitHub} alt="github" />
            </a>
        </div>
    );
}

export default Socials;
