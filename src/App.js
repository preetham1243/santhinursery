import Home from "./Components/Home";
import './App.css'; 
import {Route, Switch} from "react-router-dom";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Headnavbar from "./Components/Headnavbar";
import Footer from "./Components/Footer";
import Gallery from "./Components/Gallery";
function App() {
  return (
    <>
      <Headnavbar /> 
    <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/Home" component={Home} />
    <Route exact path="/About" component={About} />
    <Route exact path="/Gallery" component={Gallery} />
    <Route exact path="/Contact" component={Contact} />
    </Switch>
    <Footer />
    </>
  );
}

export default App;
