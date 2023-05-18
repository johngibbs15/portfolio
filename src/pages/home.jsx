import Navbar from '../components/navbar/navbar';
import Socials from '../components/socials/socials';
import Hero from '../components/hero/hero';
import Work from '../components/work-section/work-section';
import Footer from '../components/footer/footer';

function Home() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Work />
            <Footer />
            <Socials />
        </div>
    );
}

export default Home;
