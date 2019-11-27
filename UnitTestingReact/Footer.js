import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <h5>
        Copyrights reserved, {this.props.year}
      </h5>
    );
  }
}

export default Footer;
