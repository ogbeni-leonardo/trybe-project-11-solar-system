import React, { Component } from 'react';

import Title from './Title';
import MissionsCard from './MissionCard';

export default class Missions extends Component {
  render() {
    return (
      <div data-testid="missions">
        <Title headline="Missões" />
        <MissionsCard
          name="Nome"
          year="Year"
          country="Country"
          destination="Destination"
        />
      </div>
    );
  }
}
