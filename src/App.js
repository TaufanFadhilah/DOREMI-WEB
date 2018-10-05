import React, { Component } from 'react';
import ListRestaurant from './components/ListRestaurant'

class App extends Component {

  state = {
    restaurants: ''
  }

  getRestaurantData(){
    fetch('https://developers.zomato.com/api/v2.1/search?q=Bandung',{
      method: 'GET',
      headers: {
        "Accept": "application/json",
        "user-key": "02868becba07c6991b590d7336fe3ab8"
      }
    })
      .then(res => res.json())
      .then(data => this.setState({restaurants: data}))
  }

  componentDidMount(){
    this.getRestaurantData()
  }



  render() {
    return (
      <div className="container">
        <ListRestaurant restaurants={this.state.restaurants.restaurants} />        
      </div>
    );
  }
}

export default App;
