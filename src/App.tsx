import HomePage from "./pages/HomePage";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HistoryPage from "./pages/HistoryPage";
import "./App.scss";

const Root = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route exact path="/history" component={HistoryPage} />
    </Switch>
  </Router>
);

export default Root;
