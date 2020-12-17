
// About.js

import React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react'

const About = () => {
  return (
    <>
    <br/>
    <Segment basic inverted padded='very' vertical color='pink'>
      <Header as='h3' textAlign='center'>About Acme Retirement</Header>
    </Segment>
      <ul>
        <li>When you invest with us, expect a safe and peaceful retirement</li>
        <li>We have the best plans.</li>
        <li>Acme Investments are associated to Madeoff group of companies and Fly By Night Conglomerate</li>
      </ul>
      </>
  )
}

export default About;




