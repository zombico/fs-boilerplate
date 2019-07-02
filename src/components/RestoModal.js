import React, { Component } from 'react';
import axios from "axios";
import TestDataFile from './TestDataFile'

class RestoModal extends Component {
  state={
    data: '',
    hasError: false,
    showReserveCta: false
  }
  
  componentWillMount() {
    if (!this.props.demo) {
      this.getData()
    } else {
      const banana = TestDataFile.filter(resto => resto.id === this.props.info.id)
      this.setState({ 
        data: banana[0],
        showReserveCta: true
      })
    }
  }

  async getData() {
    try {
      // set error on cuisine type for restaurant with no response after 6.5 seconds
      setTimeout(()=>{
        if(this.state.data.name !== this.props.info.name) {
          const showError = {}
            showError.aggregateRating = {}            
            showError.servesCuisine = 'not available'
            showError.aggregateRating.ratingValue = 'not available'
          this.setState({ data : showError })
        }
      },3500)

      // get the restaurant from API
      const response = await axios.get(`/restos/${this.props.info.id}`)      
      this.setState({
        data: response.data.data.jsonLd[1],
        showReserveCta: true
      })
      
    } catch (error) {
      console.log(error)
      this.setState({ hasError: true })
    }
  }

  render() {
    const cuisineType = !this.state.data.servesCuisine ? '...loading' : this.state.data.servesCuisine
    const rating = !this.state.data.aggregateRating ? '...loading' : this.state.data.aggregateRating.ratingValue 
    const showReserveCta = this.state.showReserveCta
    
    
    return (
      <div className="modal__overlay">
        <div className="modal__view">
        <h1 className="restoname">{this.props.info.name}</h1>          
          <p className="restodesc">Rating: { rating }</p>
          <p className="restodesc">Cuisine: { cuisineType }</p>
          {
            showReserveCta && 
            <a 
              href={this.props.info.reserve_url} 
              target="_blank"              
            >
              <p className="reservation_cta">Make a reservation</p>
            </a>
          }
          
          {
            rating === 'not available' && 
            <>
            <p className="contact_msg">For reservations, please contact us at </p>
              <a 
                href={`tel:${this.props.info.phone}`}
                target="_blank" 
                className="rescta_text"
              > 
              <p className="contact_cta">{this.props.info.phone}</p>
              </a>
            
            </>
          }
          
        </div>
      </div>
    );
  }
}

export default RestoModal;
