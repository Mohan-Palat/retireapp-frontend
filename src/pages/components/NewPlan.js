
// NewPlan.js

import React, { Component } from 'react';
import { insertNewPlan } from '../api';
import {Header, Image, Segment} from 'semantic-ui-react'

// <a href="#" onClick={this.deletePlan}>Delete</a>
// e.preventDefault();

class NewPlan extends Component {
  render() {
    return (
      <>
        <br/>
        <Segment basic inverted padded='very' vertical color='orange'>
          <Header as='h3' textAlign='center'>New Plan Page</Header>
        </Segment>
        <br/>
        <form onSubmit={this.newPlanFormSubmitted}>
          <label for="planName">Plan Name:</label>
          <input type="text" name="planName" size="70" required />
          <br/>
          <br/>
          <div>
            <label for="planIsInstitutional">
              <input type="checkbox" id="planIsInstitutional" name="planIsInstitutional" />
              <span>Is the plan an Instituitional Plan</span>
            </label>
          </div>
          <br/>
          <input type="submit" value="Submit"></input>
        </form>
      </>
    )
  }

  // Make an API Call to Insert Plan
  newPlanFormSubmitted = (e) => {
    // e.preventDefault();
    console.log('The Plan to Insert', e.target.planName.value, e.target.planIsInstitutional.value);
    const body = { planName : e.target.planName.value,
                   planIsInstitutional : e.target.planIsInstitutional.checked
                 }
    
    insertNewPlan(body)
      .then((response) => {
        console.log(`The Plan with has been inserted. Body: `, body)
        alert("Plan added successfully")
        // const newPlansList = this.props.plans.filter((plan) => {
        //   return plan._id !== id;
        // });
        // this.props.setPlans(newPlansList);
      })
      .catch((error) => {
        console.log('API ERROR', error);
      });
  }
}

export default NewPlan;
