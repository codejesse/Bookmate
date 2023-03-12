import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Carousel from './Carousel'
import Loader from './components/Loader';
import Main from './components/Main';
import Navbar from './components/Navbar';
import Modal from './components/Modal';
import Inventory from './components/Inventory';
import BookProvider from './context/bookContext';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return isLoading ?
    <Loader /> :
    <div>
      <BookProvider>
        <Navbar />
        <Main />
        <Inventory />
      </BookProvider>
    </div>
}

export default App
