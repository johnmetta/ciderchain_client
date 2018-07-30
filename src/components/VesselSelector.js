import React, { Component } from 'react';
import SimpleSelect from './SimpleSelect';

export default class VesselSelector extends Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='vessel' plural='vessels' />
    )
  }
}
