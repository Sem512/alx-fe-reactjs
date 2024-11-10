import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import WelcomeMessage from './components/WelcomeMessage'
import Header from './components/Header.jsx'
import Footer from './components/Footer.jsx'
import MainContent from './components/MainContent.jsx'
import UserProfile from './components/UserProfile.jsx'
import Counter from './components/Counter.jsx'

function App(){
  return(
    <Counter />
  );
}

export default App
