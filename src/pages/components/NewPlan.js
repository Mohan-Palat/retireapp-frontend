
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
        <form>
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
          <input type="submit" value="Submit" onClick={this.insertThisPlan}></input>
        </form>
      </>
    )
  }

  // Make an API Call to Insert Plan
  insertThisPlan = (e) => {
    e.preventDefault();
    console.log('The Plan to Insert', e);
    // insertNewPlan(body)
    //   .then((response) => {
    //     console.log(`The Plan with body ${body} has been inserted.`)
    //     // const newPlansList = this.props.plans.filter((plan) => {
    //     //   return plan._id !== id;
    //     // });
    //     // this.props.setPlans(newPlansList);
    //   })
    //   .catch((error) => {
    //     console.log('API ERROR', error);
    //   });
  }
}







export default NewPlan;
