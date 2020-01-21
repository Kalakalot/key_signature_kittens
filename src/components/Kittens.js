import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Kitten from './Kitten'
import './Kittens.css'


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
          Here are your kittens:
          <div className="kittenContainer">
          {Array(this.state.kittensEarned).fill(<Kitten />)}
          </div>
        </p>
      </div>
    );
  }
}

export default Kittens;

