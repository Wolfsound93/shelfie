import React, { Component } from 'react';
import Dashboard from './Components/Dashboard/Dashboard';
import Form from './Components/Form/Form';
import Header from './Components/Header/Header';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();

    this.state = {
      product: ''
    };
  }

  componentDidMount() {
    axios.get('/api/product').then(res => {
      this.setState({ product: res.data });
    });
  }

  render() {
    return (
      <div>
        <Header />
        <Dashboard />
        <Form get={this.get} />
      </div>
    );
  }
}

export default App;
