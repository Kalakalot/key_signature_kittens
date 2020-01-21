import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Kitten from './Kitten'


class Kittens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      points: 6
    };
  }

  render() {
    return (
      <div>
          <p>
          + {this.state.points} points
          {Array(this.state.points).fill(<Kitten />)}
        </p>
      </div>
    );
  }
}

export default Kittens;

