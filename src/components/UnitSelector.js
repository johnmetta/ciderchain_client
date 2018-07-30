import React, { Component } from 'react';
import SimpleSelect from './SimpleSelect';

export default class UnitSelector extends Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='unit' plural='units' />
    )
  }
}
