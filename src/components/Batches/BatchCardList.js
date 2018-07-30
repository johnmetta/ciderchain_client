import React, { Component } from 'react';
import ListItem from '../Lists/ListItem';

export default class BatchCardDetails extends Component {
  render() {
    let deleteStyle = {marginLeft: '10px'}

    return (
      <section className='batch-card-details'>
        <div className='btn-group' role='group'>
          <button type='button' className='btn btn-info btn-sm'>
            <span className='glyphicon glyphicon-edit'></span>
          </button>
          <button type='button' className='btn btn-info btn-sm'>
            <span className='glyphicon glyphicon-tint'></span>
          </button>
          <button type='button' className='btn btn-primary btn-sm'>
            <span className='glyphicon glyphicon-send'></span>
          </button>
        </div>
          <button type='button' className='btn btn-danger btn-sm pull-right'>
            <span className='glyphicon glyphicon-remove'></span>
          </button>
        <ul className='list-unstyled well well-sm'>
          <ListItem data={this.props.batch.code} />
          <DatePicker
              onChange={this.handleChange} />
          <ListItem data={this.props.batch.current_vessel.code} />
        </ul>
        <form className='form-inline' onSubmit={this.handleMeasurement}>
          <div className='input-group'>

          </div>
          <div className='input-group'>
            <input type='text' className='form-control' value='blah' onChange={this.handleMeasurementChanged} />
            <div className='input-group-btn'>
              <UnitSelector callbackParent={this.handleChange} />
            </div>
          </div>
          <div className='input-group'>
            <div className='input-group-btn'>
              <PropertySelector callbackParent={this.handleChange} />
              <button type="button" className="btn btn-default" >
                <span className='glyphicon glyphicon-share'></span>
              </button>
            </div>
          </div>
        </form>
      </section>
    )
  }

}
