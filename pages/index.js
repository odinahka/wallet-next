import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Hero from '../components/Hero';
import About1 from '../components/About1';
import About2 from '../components/About2';
import About3 from '../components/About3';
import About4 from '../components/About4';
import About5 from '../components/About5';
import Blog from '../components/Blog';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Wallet Next App by Odinahka</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/wallet.ng_.png" />
      </Head>

      <main>
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
      </main>
    </div>
  )
}
