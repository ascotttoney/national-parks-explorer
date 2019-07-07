import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { NavigationBar } from './containers/NavigationBar';
import Main from './containers/Main';
import Parks from './containers/Parks'
import Visit from './containers/Visit';
import UserPage from './containers/UserPage'
import { NoMatch } from './components/NoMatch'
import { Layout } from './containers/Layout';

function App() {
  return (
    <React.Fragment>
      <NavigationBar />
      <Layout>
        <Router>
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/parks" component={Parks} />
            <Route path="/visits" component={Visit} />
            <Route path="/login" component={UserPage} />
            <Route component={NoMatch} />
          </Switch>
        </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;
