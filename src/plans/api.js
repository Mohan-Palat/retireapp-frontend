
// api.js

import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// Get All Plans
const getAllPlans = () => {
  console.log(`Hitting ALL http://localhost:5000/api/plans`)
  return axios.get(`http://localhost:5000/api/plans`);
  // console.log(`Hitting ${process.env.REACT_APP_BASE_URL}/api/plans`)
  // return axios.get(`${process.env.REACT_APP_BASE_URL}/api/plans`);
};

// Delete Plan by ID
const deletePlanByID = (id) => {
  console.log(`Hitting ID: http://localhost:5000/api/plans/${id}`)
  return axios.delete(`http://localhost:5000/api/plans/${id}`);
  // console.log(`Hitting ID: ${process.env.REACT_APP_BASE_URL}/api/plans/${id}`)
  // return axios.delete(`${process.env.REACT_APP_BASE_URL}/api/plans/${id}`);
}

// Update Plan by ID
const updatePlanByID = (id, body) => {
  console.log(`Hitting ID: http://localhost:5000/api/plans/${id} BOD=${body}`)
  return axios.patch(`http://localhost:5000/api/plans/${id}`, body);
  // console.log(`Hitting ID: ${process.env.REACT_APP_BASE_URL}/api/plans/${id}`)
  // return axios.delete(`${process.env.REACT_APP_BASE_URL}/api/plans/${id}`);
}

export { getAllPlans, deletePlanByID, updatePlanByID };
