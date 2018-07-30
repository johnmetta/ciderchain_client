import React, { Component } from 'react';
import SimpleSelect from './SimpleSelect';

export default class SourceSelector extends Component {
  render() {
    return (
      <SimpleSelect {...this.props} singular='source' plural='sources' />
    )
  }
}
