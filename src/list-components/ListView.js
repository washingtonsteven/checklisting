import React, { Component } from 'react';
//import './ListView.css'

import ListItem from './ListItem';

class ListView extends Component {
  render() {
    return (
      <div className="list-view">
        {this.props.listItems.map((listItem) => {
          return <ListItem listItemData={listItem} key={listItem._id} />
        })}
      </div>
    )
  }
}

export default ListView;