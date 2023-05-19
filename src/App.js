import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../src/pages/home';
// import About from '../src/pages/about';
// import Contact from '../src/pages/contact';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/portfolio" element={<Home />} />
                {/* <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} /> */}
            </Routes>
        </BrowserRouter>
    );
}

export default App;
