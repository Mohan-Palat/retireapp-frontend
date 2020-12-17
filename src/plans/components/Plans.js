
// plans.js

import React, { Component } from 'react';
import Plan from './Plan';
import { deletePlanByID, updatePlanByID } from '../api';
import {Header, Image, Segment} from 'semantic-ui-react'

class Plans extends Component {
  constructor() {
    super()
    this.state={showEditForm:false}
  } 
  // componentDidMount() { ------ Moved up
  //   getAllPlans()
  //     .then((response) => {
  //       console.log('allPlans', response);
  //       this.props.setPlans(response.data.plans);
  //     })
  //     .catch((error) => {
  //       console.log('API ERROR:', error);
  //     });
  // };

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
              <br/>
              <Segment basic inverted padded='very' vertical color='red'>
                <Header as='h3' textAlign='center'>Edit a Plan</Header>
              </Segment>  
              <br/>
              <form onSubmit={this.formSubmitted}>
                <label for="planName">Plan Name:</label>
                <input type="text" name="planName" size="70" 
                       required value={this.state.planName}
                       onChange={this.handleChange}
                />
                <br/>
                <div>
                  <label for="planIsInstitutional">
                    <input type="checkbox" id="planIsInstitutional" name="planIsInstitutional" 
                        defaultChecked={this.state.planIsInstitutional}
                    />
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
              <br/>
              <Segment basic inverted padded='very' vertical color='green'>
                <Header as='h3' textAlign='center'>All Plans</Header>
              </Segment>                
              <br/>
              {allPlans}
            </>
        }
      </>
    )
  }

  /* Prefill the form plans in an array and prefill [Use State] */
  showEditForm = (id, planName, planIsInstitutional) => {
    console.log("IN showEditForm ID:", planName, "planIsInstitutional", planIsInstitutional)
    this.setState({                        
      showEditForm : true,
      id : id,
      planName : planName,
      planIsInstitutional : planIsInstitutional 
    })
  }
 
  formSubmitted = (e) => {
    // Flip the switch for conditional rendering
    this.setState({                        
      showEditForm : false 
    })
    console.log("EDIT SUBMITTED")
    console.log('The Plan to Update', e.target.planName.value);
    console.log('The Plan is INSTL', e.target.planIsInstitutional.checked);
    const body = { planName : e.target.planName.value,
                   planIsInstitutional : e.target.planIsInstitutional.checked
                 }
    // Make an API Call to Update a Plan
    updatePlanByID(this.state.id, body)
      .then((response) => {
        console.log(`The Plan has been updated. Body: `, body)
        alert("Plan updated successfully")
        this.props.getPlans()
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
   if (!window.confirm("Are you sure you want to delete?")) 
        return 
    console.log('The Plan ID to Delete By', id);
    deletePlanByID(id)
      .then((response) => {
        console.log(`The Plan with the ID ${id} has been deleted.`)
        alert("Plan removed successfully")
        this.props.getPlans()
        // const newPlansList = this.props.plans.filter((plan) => {
        //   return plan._id !== id;
        // });
        // this.props.setPlans(newPlansList);
      })
      .catch((error) => {
        console.log('API ERROR', error);
      });
  }

  // If you have e.target.name, it can be a generic function
  // planName : textValue,
  // this.setState({
  //   [e.target.name] : e.target.value,
  // })
  handleChange = (e) => {
    const textValue = e.target.value
    console.log("Plan Name Text Value", textValue)
    this.setState({
      [e.target.name] : e.target.value  
    })
  }
}

export default Plans;



