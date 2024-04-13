import React from "react";
import styles from "./layout.module.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import Home from "../Home";
import About from "../About";

function Layout() {
  return (
    <div className={`container-fluid d-flex flex-column ${styles.containerLayout}`}>
      <Router>
        <Header />
        <div className="border border-primary flex-grow-1">
          <Switch>
            <Route path="/home" exact component={Home} />
            <Route path="/about" exact component={About} />
            {/* <Route path="/food/:id" component={Header} /> */}
            <Redirect from="/" to="/home" />
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default Layout;
