import React, { Component } from 'react';
import RestoCard from './RestoCard';

class RestoView extends Component {  

  render() {
    const restoData = this.props.data    
    const view = restoData.length > 0 && restoData.map(( (cardInfo, index) => 
      <RestoCard 
        info={cardInfo}
        key={index}
        demo={this.props.demo}
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