import React from 'react';
import { BrowerRouter as Router, Route, Switch } from 'react-router-dom'
import Navbar from './containers/Navbar';
import Main from './containers/Main';
import Parks from './containers/Parks'
import Visit from './containers/Visit';
import UserPage from './containers/UserPage'
import Layout from './containers/Layout';

function App() {
  return (
    <React.Fragment>
      <Navbar>
        <Layout>
          <Router>
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/parks" component={Parks} />
              <Route path="/visit" component={Visit} />
              <Route path="/login" component={UserPage} />
              <Route component={NoMatch} />
            </Switch>
          </Router>
        </Layout>
    </React.Fragment>
      );
    }
    
    export default App;
