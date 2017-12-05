import React, { Component } from 'react';
//import './ListItem.css'

class ListItem extends Component {
  constructor(props) {
    super(props);
    this.props = props;
    // this.state = {
    //   listItemText:props.listItemData.listItemText || '',
    //   listItemCompleted:props.listItemData.listItemCompleted || false
    // };

    this.onListItemChange = this.onListItemChange.bind(this);
  }

  onListItemChange(e) {
    this.props.onChange({...this.props.listItemData, listItemText:this.textInput.value, listItemCompleted:this.checkbox.checked});
  }

  render() {
    return (
      <div className='list-item'>
        <input type='checkbox' id={'checkbox_'+this.props.listItemData._id} className='list-item-checkbox' checked={this.props.listItemData.listItemCompleted ? "checked" : false} onChange={this.onListItemChange} ref={(input) => { this.checkbox = input; }} />
        <input type='text' id={'textInput_'+this.props.listItemData._id} className='list-item-text' value={this.props.listItemData.listItemText} onChange={this.onListItemChange} ref={(input) => { this.textInput = input; }} />
      </div>
    );
  }
}

export default ListItem;