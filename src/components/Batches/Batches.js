import React, { Component } from 'react';
import BatchLineForm from './BatchLineForm';

export default class Batches extends Component {
  constructor(props) {
    super(props);
    this.state = {
      batches: this.props.batches
    }
    this.addBatch = this.addBatch.bind(this);
    this.deleteBatch = this.deleteBatch.bind(this);
  }
  addBatch(batch) {
    let batches = this.state.batches.slice();
    batches.push(batch);
    this.setState({batches: batches});
  }
  deleteBatch(batch) {
    let batches = this.state.batches.slice();
    let index = this.state.batches.indexOf(batch);
    batches.splice(index, 1);
    this.setState({batches: batches});
  }
  render() {
    let rows = [];
    this.state.batches.map(function(batch) {
      rows.push(<Batch key={batch.id} handleDeleteBatch={this.deleteBatch} batch={batch}/>);
    }, this);
    return (
      <div className='batches'>
        <BatchLineForm handleNewBatch={this.addBatch} />
        <hr/>
        <table className='table table-bordered table-striped'>
          <thead>
            <tr>
              <td>Date</td>
              <td>Name</td>
              <td>Code</td>
              <td>Volume</td>
              <td>Units</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>{rows}</tbody>
        </table>
      </div>
    )
  }
}
