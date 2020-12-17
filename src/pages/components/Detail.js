
// Detail.js

import React from 'react';
import Participant from './Participant';
import Investment from './Investment';
import Holding from './Holding';
import { Route, Link } from 'react-router-dom';
import {Header, Image, Segment} from 'semantic-ui-react'

const Detail = ({ match }) => {
  return (
    <div>
      <br/>
      <Segment basic inverted padded='very' vertical color='blue'>
        <Header as='h3' textAlign='center'>Participants, Funds and Holdings under the Plan</Header>
      </Segment>      
      <br/>
      Here you can view the details of plan elements - participants, funds and the current balance rendered as an SPA
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

