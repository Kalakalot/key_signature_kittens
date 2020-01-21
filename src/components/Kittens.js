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
          {Array.from(Array(this.state.kittensEarned)).map((x, index) => <Kitten key={index} />)}
          </div>
          </p>
      </div>
      );
    };
}

export default Kittens;

Kittens.propTypes = {
  kittensEarned: PropTypes.number.isRequired,
};

