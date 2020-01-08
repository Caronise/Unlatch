import React from 'react';
import './App.css';
import Header from './components/header';
import Garage from './components/header'; 
import Dashboard from './components/dashboard'
import Footer from './components/footer'

function App() {
  return (
    <div className="App">
      <Header /> 
      <Garage />
      <Dashboard />
      <Footer />      
    </div>
  );
}

export default App;
