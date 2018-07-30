import React, { Component } from 'react';
import VolumeBadge from '../VolumeBadge';
import BatchName from './BatchName';

export default class BatchButton extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <button className='btn btn-block btn-info'
          data-toggle='dropdown'
          aria-haspopup='true'
          aria-expanded='false'
          onClick={this.props.callbackParent} >
        <div className='batch-header'>
          <VolumeBadge value={this.props.batch.volume} units={this.props.batch.unit_short_name}/>
          <BatchName batch={this.props.batch}/>
        </div>
      </button>
    )
  }
}
