import "./App.css";
import HamburgerMenu from "./components/Hamburger/HamburgerMenu";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import About from "./components/AboutME/About";
import Projects from "./components/Projects/Projects";
import Skills from "./components/Skills/Skills";
import Contact from "./components/Contact/Contact";
import styled from "styled-components";
import NavigationBar from "./components/NavBar/NavigationBar";



function App() {
  return (
    <>
    
      <Router>
        <HamburgerMenu />
        <NavigationBar/>

        <div className="pages">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/aboutme" component={About} />
            <Route path="/projects" component={Projects} />
            <Route path="/skills" component={Skills} />
            <Route path="/contact" component={Contact} />
          </Switch>
        </div>
      </Router>
     
    
      
    </>
  );
}

export default App;
