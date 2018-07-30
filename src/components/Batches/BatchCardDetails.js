import React, { Component } from 'react';
import Accordion from '../Accordion';
import SimpleHeader from '../SimpleHeader';
import SimpleMeasurementForm from '../SimpleMeasurementForm';
import SimpleAdditionForm from '../SimpleAdditionForm';
import ListItem from '../Lists/ListItem';
import dateFormat from '../Utilities';

export default class BatchCardDetails extends Component {
  render() {
    return (
      <section className='batch-card-details'>
        <ul>
          <ListItem data={this.props.batch.code } />
          <ListItem data={dateFormat(this.props.batch.created_at) } />
          <ListItem data={this.props.batch.current_vessel.code } />
        </ul>
        <Accordion {...this.props}>
          <SimpleHeader data="Measurements"/>
          <SimpleMeasurementForm /> // unit_id={this.props.unit_id} racking_id={this.props.racking_id} />
        </Accordion>
        <Accordion {...this.props}>
          <SimpleHeader data="Additions"/>
          <SimpleAdditionForm unit_id={this.props.batch.unit_id}
            racking_id={this.props.batch.current_racking.id}
            callbackParent={this.handleNewAddition} />
        </Accordion>
      </section>
    )
  }
}
