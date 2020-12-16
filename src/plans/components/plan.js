
// plan.js

import React, { Component } from 'react';

class Plan extends Component {
  render() {
    return (
      <div className="plan">
        {/* planName, planIsInstitutional, participants */}
        <h4>{this.props.planName}</h4>
        <sub>{this.props.planIsInstitutional}</sub>
        <a href="#" onClick={this.editPlan}>Edit</a> | 
        <a href="#" onClick={this.deletePlan}>Delete</a> 
      </div>
    )
  }

  deletePlan = (e) => {
    e.preventDefault();
    this.props.deletePlan(this.props.id);
  }

  editPlan = (e) => {
    e.preventDefault();
    this.props.showEditForm(this.props.id, this.props.planName, this.props.planIsInstitutional);
  }

}

export default Plan;
