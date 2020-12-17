
// Detail.js

import React from 'react';
import Participant from './Participant';
import Investment from './Investment';
import Holding from './Holding';
import { Route, Link } from 'react-router-dom';

const Detail = ({ match }) => {
  return (
    <div>
      <h3>Participants, Funds and Holdings under the Plan</h3>
      You can see the details of plan elements - participants, funds and the current balance rendered as an SPA
      <ul>
        <li>
          <Link to={match.url + '/participant'}>Participant</Link>
        </li>
        <li>
          <Link to={match.url + '/investment'}>Investment</Link>
        </li>
        <li>
          <Link to={match.url + '/holding'}>Holding</Link>
        </li>
      </ul>
      <hr />
      <Route path={match.url + '/participant'} component={Participant} />
      <Route path={match.url + '/investment'} component={Investment} />
      <Route path={match.url + '/holding'} component={Holding} />
    </div>
  )
}

export default Detail;

