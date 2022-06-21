import React, { Component } from 'react';
import PlanetCard from './PlanetCard';

import Title from './Title';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        <PlanetCard planetName="New Planet" planetImage="myImg.png" />
      </div>
    );
  }
}
