import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";
const About = lazy(() => import("./components/About"));

function Home() {
  return <h1>Home</h1>;
}
function App() {
  return (
    <Router>
      <div className="wrapper-left">
        <div className="sidebar-left">
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Switch>
        <Route path="/about">
          <Suspense fallback={"Cargando"}>
            <About />
          </Suspense>
        </Route>
        <Route path="/users">
          <h1>Users</h1>
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
