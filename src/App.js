import "./App.css";
import Home from "./pages/Home";
import SingleAnime from './components/SingleAnime'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'

function App() {
  return (
    
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}></Route>
          <Route path="/singleAnime" component={SingleAnime}></Route>
      </Switch>
      </Router>
    </div>
  
  );
}

export default App;
