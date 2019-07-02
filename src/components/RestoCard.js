import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDollarSign } from '@fortawesome/free-solid-svg-icons'

import RestoModal from './RestoModal'

class RestoCard extends Component {
  state={
    showModal: false,
    price: []
  }

  toggleRestoModal= () => {
    if(this.state.showModal === false) {
      this.setState({ showModal: true })
    } else this.setState({ showModal: false })
  }

  componentWillMount() {
    const restoPrice = this.props.info.price
    let priceIcons = []
    
    for (let i=0; i < restoPrice; i++ ) {
      priceIcons.push(
      <div className="price-icons">
        <FontAwesomeIcon icon={faDollarSign}/> 
      </div>
      )
      this.setState({ price: priceIcons})
    }
  }
  render() {
    const showRestoModal = this.state.showModal
    const banana = this.state.price
    

    return (
      <div className="restoCard" onClick={()=>this.toggleRestoModal()}>
      
      <div className="leftside">
        <div className="image-cropper">
          <img 
            className="restoPreview" 
            src={this.props.info.image_url} 
            alt="Restaurant profile pic"
          />
        </div>
      </div>
      <div className="rightside">
        <h3 className="cardrestoname">{this.props.info.name}</h3>
        
        <p className="restodesc">{this.props.info.address}</p>
                        
        <div className="price-icons">{banana}</div>
      </div>  
        {showRestoModal && 
          <RestoModal
            info={this.props.info}               
          />
        }
      </div>
    );
  }
}

export default RestoCard;
