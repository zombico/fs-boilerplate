import React, { Component } from 'react';
import RestoModal from './RestoModal'

class RestoCard extends Component {
  state={
    showModal: false
  }

  toggleRestoModal= () => {
    if(this.state.showModal === false) {
      this.setState({ showModal: true })
    } else this.setState({ showModal: false })
  }
  render() {
    const showRestoModal = this.state.showModal
    return (
      <div className="restoCard" onClick={()=>this.toggleRestoModal()}>
        {this.props.info.name}
        <br/>
        {this.props.info.address}
        <br />
        {this.props.info.price}

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
