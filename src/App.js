import "./App.css";
import React from "react";
import ContactApp from "./components/contact-app/ContactApp";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {

    }
    
  }

  render() {
    return (
      <div className="App">
      <nav className="navbar navbar-dark navbar-expand-sm bg-dark">
        <a href="/" className="navbar-brand">
          Contact-App
        </a>
      </nav>
      <ContactApp/>
    </div>
    )
  }
}

export default App;
