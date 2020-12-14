
// plans.js

import React, { Component } from 'react';
import Plan from './Plan';
import { getAllPlans, deletePlanByID } from '../api';

class Plans extends Component {
  componentDidMount() {
    getAllPlans()
      .then((response) => {
        console.log('allPlans', response);
        this.props.setPlans(response.data.plans);
      })
      .catch((error) => {
        console.log('API ERROR:', error);
      });
  };

  // planName, planIsInstitutional, participants 
  render() {
    let allPlans = <h4>No Plans!</h4>;
    if (this.props.plans.length > 0) {
      allPlans = this.props.plans.map((plan, index) => {
        return <Plan planName={plan.planName}
                     planIsInstitutional={plan.planIsInstitutional}
                     id={plan._id}
                     deletePlan={this.deletePlan}
                     key={index} />;
      });
    }
    
    return (
      <>
        <h3>All Plans</h3>
        {allPlans}
      </>
    )
  }

  // Make an API Call to Delete an Plan
  deletePlan = (id) => {
    console.log('The Plan ID to Delete By', id);
    deletePlanByID(id)
      .then((response) => {
        console.log(`The Plan with the ID ${id} has been deleted.`)
        const newPlansList = this.props.plans.filter((plan) => {
          return plan._id !== id;
        });
        this.props.setPlans(newPlansList);
      })
      .catch((error) => {
        console.log('API ERROR', error);
      });
  }
}

export default Plans;

