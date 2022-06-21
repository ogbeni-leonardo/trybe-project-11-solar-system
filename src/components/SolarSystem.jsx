import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class SolarSystem extends Component {
  render() {
    const { children } = this.props;
    return (
      <div data-testid="solar-system">
        {children}
      </div>
    );
  }
}

SolarSystem.propTypes = {
  children: PropTypes.node.isRequired,
};
