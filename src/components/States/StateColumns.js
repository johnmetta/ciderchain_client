import React, { Component } from 'react';
import RackingModal from '../RackingModal';
import StateColumn from './StateColumn';
var dragula = require('react-dragula');

export default class StateColumns extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false
    };
    this.openModal = this.openModal.bind(this);
  }

  openModal() {
    this.setState({isModalOpen: true});
  }

  closeModal() {
    this.setState({isModalOpen: false});
  }

  onDrop(el, target, source, sibling) {
    let data = {
      racking: {
        batch_id: el.id,
        old_state_id: source.id,
        state_id: target.id,
        dragged: true
      }
    };
    this.openModal();
    this.setState({data: data});
    return true;
  }

  componentDidMount() {
    var drake = dragula({
      isContainer: function (el) {
        return el.classList.contains('dragula-container');
      }
    }).on('drop', this.onDrop);
  }

  render() {
    return (
      <div className='states'>
        <RackingModal isOpen={this.state.isModalOpen} data={this.state.data}></RackingModal>
        {this.props.states.map(function (state) {
          return <StateColumn key={state.id} state={state}/>;
        })}
      </div>
    )
  }
}
