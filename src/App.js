import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <p>Coded by <a href = "https://iglesia-portfolio-shecode-hw.netlify.app/">Iglesia G Desta</a> &copy; 2025 and is <a href="https://github.com/Idesta1/dictionary-react-app">open-sourced on GitHub</a> and <a href="https://shecode-dictionary-react-app.netlify.app/">hosted on Netlify</a></p>
      </footer>
    </div>
  );
}


