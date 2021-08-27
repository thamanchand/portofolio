import * as React from 'react';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import {
  Home,
  Experience,
  Work,
  Contact,
  Skills,
  Perukirajone,
  Blockbank,
  Testamenttikone,
  Testamenttikeskus,
  Muuvz,
  IISIFIXI,
} from './Pages/Index';

import colors from './Constants/Colors';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

interface IState {
  selected: number;
  animateHeight: boolean;
}
class App extends React.Component<{}, IState> {
  state: IState = {
    selected: 0,
    animateHeight: true
  };

  handleMenuNavigation = (index: number): void => {
    this.setState({
      selected: index
    });
  };

  render() {
    return (
      <BrowserRouter>
        <div style={{ backgroundColor: colors.backgroundLite }}>
          <Navbar handleMenuNavigation={this.handleMenuNavigation} />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/skill" component={Skills} />
            <Route path="/experience" component={Experience} />
            <Route path="/work" component={Work} />
            <Route path="/contact" component={Contact} />
            <Route path="/perukirjakone" component={Perukirajone} />
            <Route path="/blockbank" component={Blockbank} />
            <Route path="/testamenttikone" component={Testamenttikone} />
            <Route path="/testamenttikeskus" component={Testamenttikeskus} />
            <Route path="/muuvz" component={Muuvz} />
            <Route path="/iisifixi" component={IISIFIXI} />
          </Switch>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
