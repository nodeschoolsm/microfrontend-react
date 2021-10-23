import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import "./navbar.css";
const About = lazy(() => import("./components/About"));

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

        <Route path="/users"></Route>
        <Route path="/">
          <h1>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero,
            iusto atque, tempore consequuntur quibusdam laboriosam eligendi
            fugiat recusandae voluptatum repellendus dolore velit commodi. Minus
            sunt rerum voluptatibus explicabo eius maxime.
          </h1>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
