import React, { Component } from 'react';
import Accounts from './accounts';
import { Link, browserHistory } from 'react-router';



class Header extends Component {
  onBinClick(event) {
    event.preventDefault();

    Meteor.call('bins.insert', (err, binId) => {
      browserHistory.push(`/bins/${binId}`) // to programmatically navigate user to particluar URL
    });
  }

  render() {
    return (
      <nav className="nav navbar-default">
        <div className="navbar-header">
          <Link to="/" className="navbar-brand">Codebin</Link>
        </div>
        <ul className="nav navbar-nav">
          <li><Accounts /></li>
          <li><a href="#" onClick={this.onBinClick.bind(this)}>Create Bin</a></li>
        </ul>
      </nav>
    );
  }
}

export default Header;
