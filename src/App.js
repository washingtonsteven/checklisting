import React, { Component } from 'react';
import './App.css';

import ListView from './list-components/ListView';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      listItems:[
        { listItemText:"Item 1", listItemCompleted:false, _id:"59a6431f5eb9712fbed5c72f" },
        { listItemText:"Item 2", listItemCompleted:true, _id:"59a64327d2ab18200085a5bf" },
        { listItemText:"Item 3", listItemCompleted:false, _id:"59a64327da23dae90a26ef8f" },
      ]
    }
  }
  render() {
    return (
      <ListView listItems={this.state.listItems}/>
    );
  }
}

export default App;
