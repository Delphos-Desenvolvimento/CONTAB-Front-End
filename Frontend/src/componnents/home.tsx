import Header from './page/Header';
import Hero from './page/Hero';
import About from './page/About';
import Footer from './page/Footer';
import Notices from './page/Notices'; // Importa o novo componente Notices

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Notices /> {/* Adiciona o componente Notices aqui, acima do About */}
        <About />
      </main>
      <Footer />
    </>
  );
}

export default Home;
