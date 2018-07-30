import React, { Component } from 'react';

export default class Batch extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete(e) {
    let url = "/batches/" + this.props.batch.id;
    /*let handler = $.ajax({
      url: url,
      type: "DELETE",
      dataType: "json",
      success: function ( data ) {
        this.props.handleDeleteBatch(this.props.batch);
      }.bind(this)
    });
    */
    handler.fail(function() {
      console.log('error');
    });
  }
  render() {
    return (
      <tr>
        <td>{dateFormat(this.props.batch.created_at)}</td>
        <td>{this.props.batch.name}</td>
        <td>{this.props.batch.code}</td>
        <td>{this.props.batch.volume}</td>
        <td>{this.props.batch.unit.name}</td>
        <td>
          <a className='btn btn-danger' onClick={this.handleDelete}>Delete</a>
        </td>
      </tr>
    )
  }
}
