import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar.jsx';
import Header from './components/Header.jsx';
import Features from './components/About.jsx';
import Footer from './components/Footer.jsx'

const App = () => {
  return (
    <div className='w-full h-screen bg-black text-white flex flex-col items-center justify-start'>
      <Navbar />
      <Header />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
