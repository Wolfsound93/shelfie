import React, { Component } from 'react';
import './Form.css';

class Form extends Component {
  constructor() {
    super();

    this.state = {
      imgLink: '',
      ProductName: '',
      price: 0
    };

    inputChange = e => {
      console.log(e.target);
      this.setState({ [e.target.name]: e.target.value });
    };
  }
  render() {
    return (
      <div className='form'>
        <div className='img_preview'></div>
        <h1>Form Component</h1>
        <h1>Image URL:</h1>
        <input name='img-url' onChange={this.inputChange} />
        <h1>Product Name:</h1>
        <input name='name' onChange={this.inputChange} />
        <h1>price:</h1>
        <input name='price' onChange={this.inputChange} />
        <div className='btn-box'>
          <button>Cancel</button>
          <button>Add</button>
        </div>
      </div>
    );
  }
}

export default Form;
