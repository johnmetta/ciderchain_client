import React, { Component } from 'react';
import SimpleSelect from './SimpleSelect';

export default class AdditiveSelector extends Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='additive' plural='additives' />
    )
  }
}
