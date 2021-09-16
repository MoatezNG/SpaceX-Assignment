import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import LaunchPage from "./pages/LaunchPage";
import "./App.scss";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/history" component={HistoryPage} />
      <Route exact path="/launches" component={LaunchPage} />
    </Switch>
  </Router>
);

export default Root;
