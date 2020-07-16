import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Navbar from "./components/navbar/navbar";
import Home from "./pages/home/home";
import About from "./pages/about/about";
import Profile from "./pages/profile/profile";
import Alert from "./components/alert/alert";
import AlertState from "./context/alert/alert-state";
import {GithubState} from "./context/github/github-state";

function App() {
  return (
    <GithubState>
      <AlertState>
        <BrowserRouter>
          <Navbar />
          <div className="container pt-4">
            <Alert alert={{text: 'Test alert'}} />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" component={About} />
              <Route path="/profile:name" component={Profile} />
            </Switch>
          </div>
        </BrowserRouter>
      </AlertState>
    </GithubState>
  );
}

export default App;
