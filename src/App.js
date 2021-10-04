import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Router>
        <Header></Header>
        <Switch>
          <Route path="/home"></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
