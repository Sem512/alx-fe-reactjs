import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainContent from './components/MainContent.jsx'
import UserProfile from './components/UserProfile.jsx'

function App(){
  return(
    <main>
      <Header />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <MainContent />
      <Footer />
    </main>
  );
}

export default App
