import React, { Component } from 'react';
import AdditiveSelector from './AdditiveSelector';
import SourceSelector from './SourceSelector';
import VesselSelector from './VesselSelector';
//import StateSelector from './States/StateSelector';
import UnitSelector from './UnitSelector';

export default class SimpleAdditionForm extends Component {
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
        <AdditiveSelector callbackParent={this.handleChange} />
        <SourceSelector callbackParent={this.handleChange} />
        <input className='form-control'
               type='text'
               name='amount'
               placeholder='Amount'
               value={this.state.amount} />
        <UnitSelector callbackParent={this.handleChange} />
        <VesselSelector callbackParent={this.handleChange} />
        <button className='btn btn-primary'
                type='submit' >
          Save
        </button>
      </section>
    )
  }
}
