import React, { Component } from 'react';

export default class Accordion extends Component {
  constructor(props) {
    super(props);
    this.state = {
      shown: false
    };
    this.toggle = this.toggle.bind(this);
  }
  toggle() {
    this.setState({shown: !this.state.shown});
  }
  render() {
    let bodyStyle = {
      shown: { display: 'inherit', padding: '5px' },
      hidden: { display: 'none', padding: '5px' },
    };
    let panelStyle = {
      marginBottom: '1px'
    };
    let stateStyle = this.state.shown ? bodyStyle.shown : bodyStyle.hidden;
    let thisId = 'batch-' + this.props.batch.id;
    return (
      <div id={thisId} className='panel panel-info' style={panelStyle}>
        <div className='accordion-header panel-heading' onClick={this.toggle} >
          {this.props.children[0]}
        </div>
        <div className='panel-body' style={stateStyle}>
          <div className='accordian-details'>
            {this.props.children[1]}
          </div>
        </div>
      </div>
    )
  }

}
