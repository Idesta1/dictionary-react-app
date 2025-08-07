import React from 'react';
import Dictionary from './Dictionary';
import './App.css';

export default function App() {
  return (
    <div className="App">
      <header className="App-header">
        <section className="grid grid-3-columns">
            <h1>Iglesia's English Dictionary</h1>
            <h4>An all-encompassing English dictionary</h4>
<p>Words made simple. Meanings made clear.</p>
         </section>
      </header>
      <main>
        <Dictionary />
      </main>
      <footer className="App-footer">
        <section className="grid grid-3-columns">
          <div>
            <h3>Find out more</h3>
            <ul>
        <a href = "https://iglesia-portfolio-shecode-hw.netlify.app/">
        <li>Coded by Iglesia G Desta  &copy; 2025 and is </li>
        </a>
        <a href="https://github.com/Idesta1/dictionary-react-app">
        <li>open-sourced on GitHub and</li>
        </a>
        <a href="https://shecode-dictionary-react-app.netlify.app/"><li>hosted on Netlify</li>
        </a>
      </ul>
      </div>
      </section>
      </footer>
    </div>
  );
}


