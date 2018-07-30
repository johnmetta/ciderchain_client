import React, { Component } from 'react';
import SimpleSelect from '../SimpleSelect';

export default class StateSelector extends Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='state' plural='states' />
    )
  }
}
