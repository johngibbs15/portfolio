import { Link } from 'react-router-dom';
import Navbar from '../components/navbar/navbar';
import Footer from '../components/footer/footer';

import '../styles/contact.css';

function Contact() {
    return (
        <div>
            <Navbar />
            <section class="contact-section">
                <h3>Many thanks for visiting my Portfolio</h3>
                <p>
                    If you would like to get in touch for any more information,
                    please contact me on
                    <a href="mailto:ania@codewithania.com">
                        john.gibbs901@gmail.com
                    </a>
                </p>
                <ul>
                    <li>
                        Twitter:{' '}
                        <a href="https://twitter.com/jonegibbs15">
                            @johngibbs15
                        </a>
                    </li>
                    <li>
                        Github:{' '}
                        <a href="https://github.com/johngibbs15">
                            @johngibbs15
                        </a>
                    </li>
                </ul>
            </section>
            <Footer />
        </div>
    );
}

export default Contact;
