import React from "react";
import './App.css'
import Weather from "./Weather"
export default function App() {
  return (
    <div className="App">
            <div className="container">
      
      <Weather defaultCity="New York"/>
        <footer className="footer-content">
          The project was coded by {" "}
          <a href="https://github.com/monaSeddighi/my-homework-project">Mona Seddighi</a> and is <a href="https://github.com/monaSeddighi" target="_blank" rel="noopener noreferrer">{" "}open-sourced on GitHub</a> {" "}and is hosted on {" "}<a href="https://app.netlify.com/sites/silver-cannoli-04e796/overview">Netlify</a>.
    </footer>
      </div>
    </div>
  );
}


