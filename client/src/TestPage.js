import React, { Component } from 'react';
import axios from 'axios';

class Fib extends Component {
  state = {
    values: [],
  };

  componentDidMount() {
    this.fetchValues();
  }

  async fetchValues() {
    const values = await axios.get('/api/values/test');
    console.log(values.data);
  }


  // renderUsers() {
  //   console.log(this.state.users);
  //   return this.state.users.map(({ number }) => number).join(', ');
  // }


  render() {
    return (
      <div>
        <h3>Users:</h3>
      </div>
    );
  }
}

// {this.renderUsers()}
export default Fib;
