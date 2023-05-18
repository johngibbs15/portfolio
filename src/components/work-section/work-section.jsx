import './work-section.css';
function Work() {
    return (
        <div>
            <section class="work-section" id="work">
                <div class="work-card-container">
                    <div class="work-card html">
                        <h6>HTML, CSS, REACT</h6>
                        <h3>Portfolio Website</h3>
                        <p>The website you are on!</p>
                        <div>
                            <a href="https://github.com/johngibbs15/react-portfolio">
                                GitHub
                            </a>
                            <a href="https://github.com/johngibbs15/react-portfolio">
                                Website
                            </a>
                        </div>
                    </div>

                    <div class="work-card css">
                        <h6>HTML, CSS, JS</h6>

                        <h3>Pokedex</h3>

                        <p>
                            A small web application with HTML, CSS, and
                            JavaScript that loads data from an external API and
                            enables the viewing of data points in detail.
                        </p>
                        <div>
                            <a href="https://github.com/johngibbs15/pokedex-app">
                                GitHub
                            </a>
                            <a href=" https://johngibbs15.github.io/pokedex-app/">
                                Website
                            </a>
                        </div>
                    </div>

                    <div class="work-card js">
                        <h6>
                            HTML, CSS, SASS, Bootsrap, JS, REACT, MONGODB,
                            NODEJS, EXPRESS,
                        </h6>

                        <h3>MyFlix - React</h3>

                        <p>
                            A full stack application using React to build the
                            client-side for myFlix based on its existing
                            server-side code (REST API and database) which was
                            built with NodeJs and MongoDB.
                        </p>
                        <div>
                            <a href="https://github.com/johngibbs15/myFlix-client">
                                GitHub
                            </a>

                            <a href="https://statuesque-chebakia-ef3431.netlify.app">
                                Website
                            </a>
                        </div>
                    </div>

                    <div class="work-card html">
                        <h6>HTML, CSS, REACT, JEST, GOOGLE API, AWS CLOUD</h6>

                        <h3>Meet Website</h3>

                        <p>
                            A serverless, progressive web application (PWA) with
                            React using a test-driven development (TDD)
                            technique. The application uses the Google Calendar
                            API to fetch upcoming events.
                        </p>
                        <div>
                            <a href="https://github.com/johngibbs15/meet">
                                GitHub
                            </a>
                            <a href="https://johngibbs15.github.io/meet/">
                                Website
                            </a>
                        </div>
                    </div>
                    <div class="work-card html">
                        <h6>
                            HTML, CSS, SASS, JS, ANGULAR, MONGODB, NODEJS,
                            EXPRESS
                        </h6>

                        <h3>myFlix - Angular</h3>

                        <p>
                            The same project mentioned before but built using
                            Angular for the clientside.
                        </p>
                        <div>
                            <a href="https://github.com/johngibbs15/myFlix-angular-client/tree/master">
                                GitHub
                            </a>
                            <a href="https://johngibbs15.github.io/myFlix-angular-client/">
                                Website
                            </a>
                        </div>
                    </div>
                    <div class="work-card html">
                        <h6>
                            React Native, Gifted Chat, Firebase, and Firestore
                        </h6>

                        <h3>Chat App</h3>

                        <p>
                            A chat app for mobile devices using React Native and
                            Firebase. The app will provide users with a chat
                            interface and options to share images and their
                            location.
                        </p>
                        <div>
                            <a href="https://github.com/johngibbs15/meet">
                                GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Work;
