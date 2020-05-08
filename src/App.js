import React, { Component, Fragment } from 'react';

import CardList from './components/card-list-component/CardList'
import SearchBox from './components/search-box/SearchBox'
import './App.css'

class App extends Component {
  constructor() {
    super() 
    this.state = {
      rockets: [],
      searchField: ''
    }
  }

  componentDidMount() {
    fetch('https://api.spacexdata.com/v3/rockets')
      .then(res => res.json())
      .then(allRockets => this.setState({ rockets: allRockets }))
      .catch(err => console.log('api failed'))
  }
  
  searchField = (e) => {
    this.setState({ searchField: e.target.value })
  }

  render() {
    const { rockets, searchField } = this.state
    const searchRockets = rockets.filter(rocket => 
      rocket.rocket_name.toLowerCase().includes(searchField.toLowerCase()) 
    )
    return (
      <Fragment>
        <h1 className='titlePage'>SPACEX</h1>
        <SearchBox searchField={ this.searchField }/>
        <CardList rockets={ searchRockets }/>
        <div class='stars'></div>
        <div class='twinkling'></div>
        <div class='clouds'></div>
      </Fragment>
    );
  }
}

export default App;
