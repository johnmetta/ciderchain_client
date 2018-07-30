import React, { Component } from 'react';
import VolumeBadge from '../VolumeBadge';
import BatchList from '../Batches/BatchList';
import capitalizeFirstLetter from '../Utilities';

export default class StateColumn extends Component {
  render() {
    return (
      <div className='col-md-2'>
        <div className='btn btn-block btn-primary btn-lg'>
          {capitalizeFirstLetter(this.props.state.name)}
          <VolumeBadge value={this.props.state.total_volume} units={this.props.state.units}/>
        </div>
        <BatchList {...this.props} />
      </div>
    )
  }
}
