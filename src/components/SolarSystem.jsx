import React, { Component } from 'react';
import Planets from '../data/planets';

import Title from './Title';
import PlanetCard from './PlanetCard';

export default class SolarSystem extends Component {
  render() {
    return (
      <div data-testid="solar-system">
        <Title headline="Planetas" />
        {Planets.map(({ name, image }, index) => (
          <PlanetCard key={ index } planetName={ name } planetImage={ image } />
        ))}
      </div>
    );
  }
}
