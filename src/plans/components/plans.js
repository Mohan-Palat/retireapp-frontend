
// plans.js

import React, { Component } from 'react';
import Plan from './Plan';
import { getAllPlans, deletePlanByID, updatePlanByID } from '../api';

class Plans extends Component {
  constructor() {
    super()
    this.state={showEditForm:false}
  }
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
  // We could have used ()=> anonymous function in showEditForm={this.showEditForm}
  // This would shorten the code by not having a separate function like showEditForm
  // Thiago debugged it and found out it works with a div tag not with an a tag
  render() {
    let allPlans = <h4>No Plans!</h4>;
    if (this.props.plans.length > 0) {
      allPlans = this.props.plans.map((plan, index) => {
        return <Plan planName={plan.planName}
                     planIsInstitutional={plan.planIsInstitutional}
                     id={plan._id}
                     deletePlan={this.deletePlan}
                     showEditForm={this.showEditForm}
                     key={index} />;
      });
    }
    
    return (
      <>
        {
          this.state.showEditForm 
          ?
            <>
              {/* Form right under here, later to Move to EditPlan Component */}
              <h3>Edit a Plan</h3>               
              <form onSubmit={this.formSubmitted}>
                <label for="planName">Plan Name:</label>
                <input type="text" name="planName" size="70" required value={this.state.planName}/>
                <br/>
                <div>
                  <label for="planIsInstitutional">
                    <input type="checkbox" id="planIsInstitutional" name="planIsInstitutional" />
                    <span>Is the plan an Instituitional Plan</span>
                  </label>
                </div>
                <br/>
                <input type="submit" value="Submit"></input>..
                <input type="button" value="Cancel" onClick={
                       ()=>this.setState({ showEditForm : false }) }>
                </input>
              </form>
            </>
          : 
            <>
              <h3>All Plans</h3>
              {allPlans}
            </>
        }
      </>
    )
  }

  /* Prefill the form plans in an array and prefill [Use State] */
  showEditForm = (id, planName) => {
    console.log("IN showEditForm ID:", planName)
    this.setState({                        
      showEditForm : true,
      id : id,
      planName : planName  
    })
  }
 
  formSubmitted = (e) => {
    // Flip the switch for conditional rendering
    this.setState({                        
      showEditForm : false 
    })
    console.log("EDIT SUBMITTED")
    console.log('The Plan to Update', e.target.planName.value, e.target.planIsInstitutional.value);
    const body = { planName : e.target.planName.value,
                   planIsInstitutional : 'on' // Change later, MVP getting late 
                 }
    // Make an API Call to Update a Plan
    updatePlanByID(this.state.id, body)
      .then((response) => {
        console.log(`The Plan has been updated. Body: `, body)
        alert("Plan updated successfully")
        // const newPlansList = this.props.plans.filter((plan) => {
        //   return plan._id !== id;
        // });
        // this.props.setPlans(newPlansList);
      })
      .catch((error) => {
        console.log('API ERROR', error);
      });
  }

  // Make an API Call to Delete a Plan
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

// <input type="button" value="Cancel" onClick={this.formCancelled}></input>




