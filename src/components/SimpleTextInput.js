import React, { Component } from 'react';

export default class SimpleTextInput extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.name,
      placeholder: this.props.placeholder,
      value: this.props.value,
      parentCallback: this.props.parentCallback
    };
  }

  handleChange(e) {
    let name = e.target.name;
    this.setState({name: e.target.value});
  }
  render() {
    return (
      <input type='text' className='form-control' placeholder={this.state.placeholder} name={this.state.name} value={this.state.value} onChange={this.handleChange} />
    )
  }
}
