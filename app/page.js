import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Achievements from '../components/Achievements';
import Teams from '../components/Teams';
import Discover from '../components/Discover';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Achievements />
      <Teams />
      <Discover />
      <Footer />
    </main>
  );
}
