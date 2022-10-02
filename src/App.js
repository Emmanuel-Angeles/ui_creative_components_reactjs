import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './containers/Layout';
import Home from './pages/Home';
import Modal from './pages/Modal';
import Pokeapi from './pages/Pokeapi';
import './styles/App.scss'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='Modal' element={<Modal />} />
            <Route path='Pokeapi' element={<Pokeapi />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
