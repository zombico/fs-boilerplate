import React, { Component } from 'react';
import axios from "axios";

class Fetcher extends Component {
  state = {
    resto: '',
    data: ''
  }

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.getData()
  };

  async getData() {
    try {
      const response = await axios.get(`/restos/${this.state.resto}`)
      // console.log(response)
      this.setState({ 
        data: response.data.data.jsonLd[1]
      })
    } catch (error) {
      console.log(error)
      this.setState({ hasError: true })
    }
  }
  

  render() {
    return (
      <>
        <select value={this.state.resto} onChange={this.handleChange} name="resto">
          <option> - </option>
          <option>65854</option>
          <option>82957</option>
        </select>
      </>
    );
  }
}

export default Fetcher;
