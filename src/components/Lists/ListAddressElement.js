import React, { Component } from 'react';

export default class ListAddressElement extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <li className={this.props.className}><a href={this.props.href}>{capitalizeFirstLetter(this.props.text)}</a></li>
  }
}
ListAddressElement.defaultProps = { className: 'list-address-element' };
