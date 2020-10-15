import React from 'react';
import './App.css';
import Categories from './Components/Categories';
import BaseFooter from './Components/Home/BaseFooter'
import Footer from './Components/Home/Footer'
import { BrowserRouter as Router } from 'react-router-dom'
import Routing from './Routing';
import Navbar from './Components/Navbar'

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Categories />
        <Routing />
        <Footer />
        <BaseFooter />
      </Router>
    </div>
  );
}

export default App;
