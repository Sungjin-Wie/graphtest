import React from 'react';
import { Home, ReChart, Header, Nivo, BizChart } from './components';
import { HashRouter, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <HashRouter>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/rechart' component={ReChart} />
        <Route exact path='/nivo' component={Nivo} />
        <Route exact path='/bizchart' component={BizChart} />
      </Switch>
    </HashRouter>
  );
}

export default App;
