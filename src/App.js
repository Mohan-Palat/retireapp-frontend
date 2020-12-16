
// App.js

import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Plans from './plans/components/Plans';
import About from './pages/components/About';
import Detail from './pages/components/Detail';
import NewPlan from './pages/components/NewPlan';
import Nav from './shared/components/Nav';
import { getAllPlans } from './plans/api';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
    }
  }

  componentDidMount() {
    this.getPlans()
  }

  getPlans = () => {
    getAllPlans()
      .then((response) => {
        console.log('allPlans', response);
        this.setState({ plans: response.data.plans });
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });    
  }

  render() {
    return (
      <>
        <Route path='/' component={Nav} />

        <Route path='/' exact render={() => <h2>Welcome to the ⛱ ACME Retirement App!</h2>} />

        <Route path='/about' component={About} />
        <Route path='/detail' component={Detail} />
        <Route path='/newplan' component={NewPlan} />

        <Route path='/plans' exact render={(props) => {
          return <Plans {...props}
                           plans={this.state.plans}
                           getPlans={this.getPlans} />
        }} />

      </>
    )
  }
}

export default App;