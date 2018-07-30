import React, { Component } from 'react';
import Modal from './Modal';
import post from '../clients/api'

export default class RackingModal extends Component {
  onAccept() {
    this.ajaxRequest();
  }
  ajaxRequest() {
    post('/rackings', {
        racking: {
          batch_id: this.props.data.batch.id,
          old_state_id: this.props.data.source.id,
          state_id: this.props.data.target.id,
          dragged: true
        }
      }
    )
  }

  render() {
    return (
      <Modal isOpen={this.props.isOpen} >
        <h1>Sure?</h1>
        <button type="button" className="btn btn-primary" onClick={this.onAccept}>Yes</button>
      </Modal>
    )
  }
}
