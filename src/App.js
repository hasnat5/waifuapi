import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Homepage from './pages/Homepage';
import DetailMovie from './pages/DetailMovie';
import NotFound from './pages/NotFound';
import Navbar from './components/Navbar';
import './App.css';
import Footer from './components/Footer';
import React, { useState } from 'react';

function App() {
  const [url, setUrl] = useState('')

  const getData = (data) => {
    console.log(data)
    setUrl(data)
  }

  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage onSubmit={getData} />} />
        <Route path='/detail/' element={<DetailMovie data={url} />} />
        <Route path='/*' element={<NotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
