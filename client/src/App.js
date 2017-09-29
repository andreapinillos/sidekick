import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/About";
import Profile from "./pages/Profile";
import Activity from "./pages/Activity";
import Sidekick from "./pages/Sidekick";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wrapper from "./components/Wrapper";

const App = () =>
  <Router>
    <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/activity" component={Activity} />
        <Route exact path="/sidekick" component={Sidekick} />
      </Wrapper>
      <Footer />
    </div>
  </Router>;

export default App;
