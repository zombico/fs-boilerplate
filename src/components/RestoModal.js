import React, { Component } from 'react';
import axios from "axios";

class RestoModal extends Component {
  state={
    data: '',
    hasError: false,
    showReserveCta: false
  }
  
  componentWillMount() {
    this.getData()
  }

  async getData() {
    try {
      // set error on cuisine type for restaurant with no response after 6.5 seconds
      setTimeout(()=>{
        if(this.state.data.name != this.props.info.name) {
          const showError = {}
            showError.aggregateRating = {}            
            showError.servesCuisine = 'not available'
            showError.aggregateRating.ratingValue = 'not available'
          this.setState({ data : showError })
        }
      },6500)

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
          {this.props.info.name}
          <br/>          
          Rating: { rating }
          <br />
          Cuisine: { cuisineType }
          <br />
          {
            showReserveCta && 
            <a href={this.props.info.reserve_url} target="_blank">Make a reservation</a>                        
          }
          {
            rating === 'not available' && 
            <p>Please contact us at {this.props.info.phone}</p>
          }
          <div>
            <img src={this.props.info.image_url} />
          </div>
        </div>
      </div>
    );
  }
}

export default RestoModal;
