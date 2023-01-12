import React from "react";
import './App.css';
import Weather from "./Weather"
export default function App() {
  return (
    <div className="App">
            <div className="container">
      
      <Weather/>
        <footer className="footer-content">
          The page was coded by <a href="https://github.com/monaSeddighi">Mona Seddighi</a> and it is an <a
          href="https://github.com/monaSeddighi/my-homework-project" target="_blank" rel="noopener noreferrer">
          open-source on GitHub
        </a>
      </footer>
      </div>
    </div>
  );
}


