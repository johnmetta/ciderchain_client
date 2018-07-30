import React, { Component } from 'react';
import BatchCardHeader from './BatchCardHeader';
import BatchCardDetails from './BatchCardDetails';
import Accordion from '../Accordion';

export default class BatchCard extends Component {
  render() {
    return (
      <Accordion {...this.props}>
        <BatchCardHeader batch={this.props.batch} />
        <BatchCardDetails batch={this.props.batch} />
      </Accordion>
    )
  }

}
