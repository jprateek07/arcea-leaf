import './App.css';
import { Route, Switch } from 'react-router-dom';

import Layout from './components/layout'
import About from './components/about'
import RoundPlate from './components/roundPlate'
import SquarePlate from './components/squarePlate'
import HeartPlate from './components/heartPlate'
import RectanglePlate from './components/reactanglePlate'
import Fork from './components/fork'
import OvalPlate from './components/ovalPlate'
import Spoons from './components/spoons'
import Gallery from './components/gallery'
import Contact from './components/contact'
import HomePage from './components/homePage'
import Certificate from './components/certificate'
import MgCraft from './components/mgCraft'
import Duplex from './components/duplex'
import RoundBowl from './components/roundBowl'
import SquareBowl from './components/squareBowl'
import HeartBowl from './components/heartBowl'

function App() {
  return (
    <>
      <Layout>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about' component={About} />
          <Route exact path='/round-plate' component={RoundPlate} />
          <Route exact path='/square-plate' component={SquarePlate} />
          <Route exact path='/heart-plate' component={HeartPlate} />
          <Route exact path='/rectangle-plate' component={RectanglePlate} />
          <Route exact path='/oval-plate' component={OvalPlate} />
          <Route exact path='/spoons' component={Spoons} />
          <Route exact path='/forks' component={Fork} />
          <Route exact path='/gallery' component={Gallery} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/certificate' component={Certificate} />
          <Route exact path='/mg-craft' component={MgCraft} />
          <Route exact path='/duplex' component={Duplex} />
          <Route exact path='/round-bowl' component={RoundBowl} />
          <Route exact path='/square-bowl' component={SquareBowl} />
          <Route exact path='/heart-shaped-bowl' component={HeartBowl} />
        </Switch>
      </Layout>
    </>
  );
}

export default App;
