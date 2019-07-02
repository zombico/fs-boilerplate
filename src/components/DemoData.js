import React, { Component } from 'react';
import RestoView from './RestoView'
import TestDataCities from './TestDataCities'

class DemoData extends Component {
  state={
    city: '',
    data: '',
    page: 1
  }  

  async componentWillMount() {
    await this.setState({ city: 'Toronto'})
    this.getCityRestaurants()
  }

  handleChange = async e => {
    await this.setState({ [e.target.name]: e.target.value });
    this.getCityRestaurants()
    
  };

  getCityRestaurants() {
    const apple = TestDataCities.filter(resto => resto.city === this.state.city)
    this.setState({ data: apple })
  }

  

  render() {
    return (
      <>
        <div className="topbar">
          <select className="cityselector" value={this.state.city} onChange={this.handleChange} name="city">
            <option> - </option>
            <option>Toronto</option>
            <option>New York</option>            
          </select>
          {/* <button className="loader" onClick={() => this.loadMore()}>Load More</button> */}
        </div>
        <RestoView 
          data={this.state.data}
          demo={true}
        />
        
      </>
    );
  }
}

export default DemoData;
