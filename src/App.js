import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src="" alt="shecodes logo" className="App-logo" />
      </header>
      <main>
        <Dictionary />
        <p>Start searching for words in the dictionary!</p>
      </main>
      <footer className="App-footer">
        <p>Coded by Iglesia G Desta &copy; 2023 My Dictionary App</p>
      </footer>
    </div>
  );
}


