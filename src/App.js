import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <span className="navbar-brand">koi to hospital</span>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mb-2 mb-lg-0 d-flex ms-auto">
              <li className="nav-item mx-3">Register </li>
              <li className="nav-item mx-3">Stats</li>
            </ul>
          </div>
        </div>
      </nav>
      <div className="container">
        <Router>
          <Switch>
            <Route path="/about">
              <p>about</p>
            </Route>
            <Route path="/users">
              <p>user</p>
            </Route>
            <Route path="/">
              <p>home</p>
            </Route>
          </Switch>
        </Router>
      </div>
    </div>
  );
};

export default App;
