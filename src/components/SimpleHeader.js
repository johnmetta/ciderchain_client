import React, { Component } from 'react';

export default class SimpleHeader extends Component {
  render() {
    return (
      <div className='simple-header'>
        {this.props.data}
      </div>
    )
  }
}
