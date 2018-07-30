import React, { Component } from 'react';
import SimpleSelect from './SimpleSelect';

export default class PropertySelector extends Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='property' plural='properties' />
    )
  }
}
