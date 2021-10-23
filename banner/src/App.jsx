import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./banner.css";
function About() {
  return (
      <div>
        <div className="container-banner">
          <div className="selector">
            <br />
            BANNER
          </div>
        </div>
      </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
