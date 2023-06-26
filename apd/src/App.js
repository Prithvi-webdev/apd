import React from 'react';
import './App.css';
import Header from './components/header/header';
import Nav from './components/nav/nav';
import Footer from './components/footer/footer';
import Main from './components/main/main';





function App() {
  return (
    <div className="App">
      <Header/>
      <Nav/>
      <Main/>
      <Footer/>
    </div>
  );
}


export default App;
