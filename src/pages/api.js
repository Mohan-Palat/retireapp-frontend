
// api.js

import axios from 'axios';

// INDEX, SHOW, CREATE, UPDATE, DESTROY

// CREATE a Plan
const insertNewPlan = (body) => {
    console.log(`Hitting ID: http://localhost:5000/api/plans Object is:`, body)
    return axios.post(`http://localhost:5000/api/plans/`, body);
    // console.log(`Hitting ID: ${process.env.REACT_APP_BASE_URL}/api/plans/${id}`)
    // return axios.delete(`${process.env.REACT_APP_BASE_URL}/api/plans/${id}`);
  }
  
export { insertNewPlan };
