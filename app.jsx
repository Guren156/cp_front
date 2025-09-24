import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NewsPage from './pages/NewsPage';


function App() {
  return (
    <>
      <header className="header">
        <div className="container">
          <Link to="/" className="logo"><h1>Portal de Notícias</h1></Link>
        </div>
      </header>
      
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/news/:id" element={<NewsPage />} />
        </Routes>
      </main>

      <footer className="footer">
        <div className="container">
          <p>Henrique Orellana Pereira - RM: 565608</p>
          <p>Pedro Mariutti - RM: 57999</p>
        </div>
      </footer>
    </>
  );
}

export default App;