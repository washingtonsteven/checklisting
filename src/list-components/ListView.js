import React, { Component } from 'react';
//import './ListView.css'

import ListItem from './ListItem';

class ListView extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(newItem) {
    const newList = Object.assign({}, this.props).listItems;
    const itemIndex = newList.findIndex((v) => { return (v._id === newItem._id); });
    newList.splice(itemIndex, 1, newItem);
    this.props.onChange(newList);
  }

  render() {
    return (
      <div className="list-view">
        {this.props.listItems.map((listItem) => {
          return <ListItem listItemData={listItem} key={listItem._id} onChange={this.onChange} />
        })}
      </div>
    )
  }
}

export default ListView;