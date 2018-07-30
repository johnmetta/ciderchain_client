import React, { Component } from 'react';
import ListAddressElement from './Lists/ListAddressElement';

export default class NavBar extends Component {
  constructor(props) {
    super(props);
  }
  logoutLink() {
    if(this.props.current_user)
      return <a href='/logout'>Logout</a>;
    else
      return <a href='/login'>Login</a>;
  }
  render() {
    return (
      <nav className='navbar navbar-default navbar-fixed-top'>
        <div className='container-fluid'>
          <div className='navbar-header'>
            <a className='navbar-brand' href={this.props.home_link}>{this.props.home_name}</a>
          </div>
          <div className='navbar-collapse collapse'>
            <ul className='nav navbar-nav'>
              {this.props.links.map(function(link) {
                return <ListAddressElement href={link} text={link} key={link}/>;
              })}
            </ul>
            <div className='navbar-text navbar-right'>
              {this.logoutLink()}
            </div>
          </div>
        </div>
      </nav>
    )
  }
}

NavBar.defaultProps = { home_link: '/', home_name: 'Home', links: ['batches', 'rackings', 'vessels', 'measurements', 'additions']}
