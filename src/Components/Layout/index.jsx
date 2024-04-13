import React from "react";
import styles from "./layout.module.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";

function Layout() {
  return (
    <div className={`border border-danger container-fluid d-flex flex-column ${styles.containerLayout}`}>
      <Router>
        <Header />
        <div className="border border-primary flex-grow-1">
          <Switch>
            <Route path="/home" exact component={Header} />
            <Route path="/about" exact component={Footer} />
            <Route path="/food/:id" component={Header} />
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default Layout;
