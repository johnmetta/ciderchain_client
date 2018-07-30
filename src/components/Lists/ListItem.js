import React, { Component } from 'react';

export default class ListItem extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <li>{this.props.data}</li>
  }
}
