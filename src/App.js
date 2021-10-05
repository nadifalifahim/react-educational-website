import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { Container } from 'react-bootstrap';
import About from './Components/AboutUs/About';
import Footer from './Components/Footer/Footer';
import PageNotFound from './Components/PageNotFound/PageNotFound';
import Contact from './Components/Contact/Contact';
import Services from './Components/Services/Services';

function App() {
  const logo = <FontAwesomeIcon icon={faEdit}></FontAwesomeIcon>;

  return (
    <Container fluid>
      <Router>
        <Header logo={logo}></Header>
        <Switch>
          <Route path="/home">
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/services">
            <Services></Services>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
           <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="*">
            <PageNotFound></PageNotFound>
          </Route>
        </Switch>
        <Footer logo={logo}></Footer>
      </Router>
    </Container>
  );
}

export default App;
