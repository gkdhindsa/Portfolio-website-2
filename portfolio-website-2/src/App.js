
import './App.css';
import Navbar from './Navbar';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar></Navbar>
        <div className="content">
          <Switch>
            <Route path="/" exact>
              
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
    
  );
}

export default App;
