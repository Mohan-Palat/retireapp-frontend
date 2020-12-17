
// About.js

import React from 'react';
import {Header, Image, Segment} from 'semantic-ui-react'

const About = () => {
  return (
    <>
    <Segment basic inverted padded='very' vertical>
      <h3>About Acme Retirement</h3>
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
