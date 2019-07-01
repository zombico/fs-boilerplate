import React, { Component } from 'react';
import RestoCard from './RestoCard';

class RestoView extends Component {
  

  render() {
    const banana = this.props.data
    console.log(banana)
    const view = banana.length > 0 && banana.map(( (cardInfo, index) => 
      <RestoCard 
        info={cardInfo}
        key={index}
      />
    ))
    return (
      <div className="restoView" >
        {view}
      </div>
    )
  }
}

export default RestoView