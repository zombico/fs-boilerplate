import React, { Component } from 'react';

class RestoCard extends Component {
  
  render() {
    return (
      <div className="restoCard">
        {this.props.info.name}
        <br/>
        {this.props.info.address}
        <br />
        {this.props.info.price}
      </div>
    );
  }
}

export default RestoCard;
