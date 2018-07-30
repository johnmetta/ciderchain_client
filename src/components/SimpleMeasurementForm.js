import React, { Component } from 'react';
import SourceSelector from './SourceSelector';
import UnitSelector from './UnitSelector';
import PropertySelector from './PropertySelector';

export default class SimpleMeasurementForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      edit: false,
      unit_id: this.props.unit_id,
      racking_id: this.props.racking_id
    };
  }
  handleChange(e) {

  }

  render() {
    return (
      <section>
        <PropertySelector callbackParent={this.handleChange} />
        <SourceSelector callbackParent={this.handleChange} />
        <input className='form-control'
               type='text'
               name='value'
               placeholder='Value'
               value={this.state.value} />
        <UnitSelector callbackParent={this.handleChange} />
        <button className='btn btn-primary'
                type='submit' >
          Save
        </button>
      </section>
    )
  }
}
