import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Kitten from './Kitten'


class Kittens extends Component {
  constructor(props) {
    super(props);
    this.state = {
      kittensEarned: props.kittensEarned
    };
  }

  render() {
    return (
      <div>
          <p>
          + {this.state.kittensEarned} kittens earned
          {Array(this.state.kittensEarned).fill(<Kitten />)}
        </p>
      </div>
    );
  }
}

export default Kittens;

