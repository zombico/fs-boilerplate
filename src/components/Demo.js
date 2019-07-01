import React, { Component } from 'react';
import axios from "axios";
import RestoView from './RestoView'

class Demo extends Component {
  state={
    city: '',
    data: '',
    page: 1
  }  

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.getCityRestaurants()
  };

  async getCityRestaurants() {
    try {
      const response = await axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${this.state.city}&page=${this.state.page}`)      
      this.setState({ 
        data: response.data.restaurants
      })
    } catch (error) {
      console.log(error)
      this.setState({ hasError: true })
    }
  }

  async loadMore() {
    const newPage = this.state.page +1
    await this.setState({ page: newPage })
    try {
      const response = await axios.get(`http://opentable.herokuapp.com/api/restaurants?city=${this.state.city}&page=${this.state.page}`)
      let oldData = this.state.data
      let newData = response.data.restaurants
      newData.push(...oldData)
      this.setState({ 
        data: newData
      })
    } catch (error) {
      console.log(error)
      this.setState({ hasError: true })
    }
  }
  

  render() {
    return (
      <>
        <select value={this.state.city} onChange={this.handleChange} name="city">
          <option> - </option>
          <option>Toronto</option>
          <option>New York</option>
        </select>
        <button onClick={() => this.loadMore()}>Load More</button>
        <RestoView 
          data={this.state.data}
        />
        
      </>
    );
  }
}

export default Demo;
