import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Plans from './plans/components/Plans';
import About from './pages/components/About';
import Team from './pages/components/Team';
import Nav from './shared/components/Nav';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      plans: [],
    }
  }

  setPlans = (plans) => {
    this.setState({ plans: plans });
  }

  render() {
    return (
      <>
        <Route path='/' component={Nav} />

        <Route path='/' exact render={() => <h2>Welcome to the Retirement App!</h2>} />

        <Route path='/about' component={About} />
        <Route path='/team' component={Team} />

        <Route path='/plans' exact render={(props) => {
          return <Plans {...props}
                           plans={this.state.plans}
                           setPlans={this.setPlans} />
        }} />

      </>
    )
  }
}

export default App;