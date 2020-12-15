
// NewPlan.js

import React, { Component } from 'react';
import { insertNewPlan } from '../api';

// <a href="#" onClick={this.deletePlan}>Delete</a>
// e.preventDefault();

class NewPlan extends Component {
  render() {
    return (
      <>
        <h1>New Plan Page</h1>
        <form onSubmit={this.newPlanFormSubmitted}>
          <label for="planName">Plan Name:</label>
          <input type="text" name="planName" required />
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
    e.preventDefault();
    console.log('The Plan to Insert', e.target.planName.value, e.target.planIsInstitutional.value);
    const body = {planName : e.target.planName.value}
    if (e.target.planIsInstitutional === 'on') {
      body.planIsInstitutional = true;
    } else {
      body.planIsInstitutional = false;
    }
    
    insertNewPlan(body)
      .then((response) => {
        console.log(`The Plan with has been inserted. Body: `, body)
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
