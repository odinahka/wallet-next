import Header from './Header';
import Hero from './Hero';
import About1 from './About1';
import About2 from './About2';
import About3 from './About3';
import About4 from './About4';
import About5 from './About5';
import Blog from './Blog';
import Footer from './Footer';

function App() {
  return (
    <div>
    <div className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden scrollbar scrollbar-track-[#808d98] scrollbar-thumb-wallet_blue'>
    <section className='snap-top' id='hero'>
    <Header />
    <Hero/>
    </section>
    <section className='snap-top' id='about1'>
      <About1/>
    </section>
    <section className='snap-top' id='about2'>
      <About2/>
    </section>
    <section className='snap-top' id='about3'>
      <About3/>
    </section>
    <section className='snap-top' id='about4'>
      <About4/>
    </section>
    <section className='snap-top' id='about5'>
      <About5/>
    </section>
    <section className='snap-top' id='blog'>
      <Blog/>
    </section>
    <section className='snap-top' id='footer'>
      <Footer/>
    </section>
    </div>
    </div>
  );
}

export default App;
