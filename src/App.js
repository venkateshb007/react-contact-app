import "./App.css";
import React from "react";
import ContactApp from "./components/contact-app/ContactApp";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
        <a href="/" className="navbar-brand">
          Contact-App
        </a>
      </nav>
      <ContactApp />
    </div>
  );
};

export default App;
