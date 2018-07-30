import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group'

export default class Modal extends Component {
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
  divShown() {
    if(this.props.isOpen){
      return (
        <CSSTransitionGroup transitionName={this.props.transitionName}>
          <div className="modal">
            {this.props.children}
          </div>
        </CSSTransitionGroup>
      );
    } else {
      return <CSSTransitionGroup transitionName={this.props.transitionName} />;
    }
  }
  render() {
    let bodyStyle = {
      shown: { display: 'inherit', padding: '5px' },
      hidden: { display: 'none', padding: '5px' },
    };
    return this.divShown();
  }
}

Modal.defaultProps = { isOpen: false, transitionName: 'blah' };
