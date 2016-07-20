import React, { Component } from 'react';

class BinShare extends Component {
  onShareClick() {
    const email = this.refs.email.value;
    Meteor.call('bins.share', this.props.bin, email);
  }

  render() {
    return (
      <footer className="bin-share">
        <div className="input-group">
          <input ref="email" className="form-control" />
          <div className="input-group-btn">
            <button
              onClick={this.onShareClick.bind(this)}
              className="btn btn-default">Share Bin</button>
          </div>
        </div>
      </footer>
    );
  }
}

export default BinShare;
