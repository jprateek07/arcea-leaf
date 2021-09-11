import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Layout from './components/layout'
import About from './components/about'
import RoundPlate from './components/roundPlate'
import SquarePlate from './components/squarePlate'
import HeartPlate from './components/heartPlate'
import Spoons from './components/spoons'
import Gallery from './components/gallery'
import Contact from './components/contact'
import HomePage from './components/homePage'
function App() {
  return (
    <>
      <Layout>
        <Router>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <Route exact path='/about' component={About} />
            <Route exact path='/round-plate' component={RoundPlate} />
            <Route exact path='/square-plate' component={SquarePlate} />
            <Route exact path='/heart-plate' component={HeartPlate} />
            <Route exact path='/spoons' component={Spoons} />
            <Route exact path='/gallery' component={Gallery} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
        </Router>
      </Layout>
    </>
  );
}

export default App;
