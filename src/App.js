import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages";
import Mint from "./pages/mint";
import Discord from "./pages/discordRedirect";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/mint" component={Mint} exact />
        <Route path="/discord" component={Discord} exact />
      </Switch>
    </Router>
  );
}

export default App;
