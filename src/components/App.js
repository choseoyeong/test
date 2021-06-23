import React from "react";
import { ThemeProvider } from "@material-ui/styles";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from "./ui/Header";
import Main from "./ui/Main";
import Theme from "./Theme";
import Evaluation from "./ui/Evaluation";
import StaticMyPersonalLine from "./StaticMyPersonalLine";
import Login from "./ui/Login";
import { Report } from "./ui/Report";
import PersonalReport from "./ui/PersonalReport";
import ProviderReport from "./ui/ProviderReport";
function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Header />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route exact path="/login" component={Login} />
            <Route
              exact
              path="/staticreport"
              component={StaticMyPersonalLine}
            />
            <Route exact path="/evaluation/:id" component={Evaluation} />
            <Route exact path="/report/:email" component={Report} />
            <Route exact path="/report/:email/:id" component={PersonalReport} />
            <Route path="/provider/report" component={ProviderReport} />
          </Switch>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
