import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer'
import Ticket from './components/Ticket';
import About from './components/About';
import Contact from './components/Contact';
import Performance from './components/Performance';

function App() {
  return (
    <div>
    <div className="">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/">
            <Home />
            </Route>
            <Route path="/performance" component={Performance} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route path="/ticket" component={Ticket} />
        </Switch>
        <Footer />
      </Router>
    </div>
    </div>
  );
}

export default App;