import React, { Component } from 'react';
import UnitSelector from '../UnitSelector';
import VesselSelector from '../VesselSelector';
import StateSelector from '../States/StateSelector';
import post from '../../clients/api';

export default class BatchLineForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      created_at: new Date().toJSON().slice(0,10),
      unit_id: 3,
      code: '',
      volume: '',
      name: '',
      state_id: '',
      vessel_id: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(e) {
    let batch = { batch: this.state };
/*    $.ajax({
      url: "/batches",
      type: "POST",
      dataType: "json",
      data: batch,
      success: function ( data ) {
        this.props.handleNewBatch(data);
      }.bind(this)
    });
    */
  }
  handleChange(e) {
    this.setState({[e.target.name]: e.target.value});
    /*if ((e.target.name == 'vessel_id') && (this.state.volume == ''))
      $.getJSON('/vessels/'+e.target.value, function(result) {
        this.setState({
          volume: result.volume,
          unit_id: result.unit_id
        })
      }.bind(this));
      */
  }
  valid() {
    return this.state.name &&
      this.state.code &&
      this.state.volume &&
      this.state.unit_id &&
      this.state.vessel_id &&
      this.state.state_id;
  }
  componentDidMount() {
    /*this.serverRequest = $.getJSON('/batches/latest_code', function (result) {
      this.setState({
        code: result.code
      });
    }.bind(this));
    */
  }
  componentWillUnmount() {
    this.serverRequest.abort();
  }

  render() {
    return (
      <form className='form-inline' onSubmit={this.handleSubmit}>
        <input type='text' className='form-control' name='created_at' value={this.state.created_at} onChange={this.handleChange} />
        <input type='text' className='form-control' name='name' placeholder='Name' value={this.state.name} onChange={this.handleChange} />
        <input type='text' className='form-control' name='code' value={this.state.code} onChange={this.handleChange} />
        <input type='text' className='form-control' name='volume' placeholder='volume' value={this.state.volume} onChange={this.handleChange} />
        <UnitSelector current_value={this.state.unit_id} callbackParent={this.handleChange} unit_id={this.state.unit_id} />
        <StateSelector callbackParent={this.handleChange} />
        <VesselSelector callbackParent={this.handleChange} url='/vessels/free' />
        <button className='btn btn-primary' disabled={false} type='submit'>
          Create Batch
        </button>
      </form>
    )
  }
}
