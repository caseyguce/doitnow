import React, { Component } from 'react';
import '../../css/components/todo/AddNewItem.css';

class AddNewItem extends Component {
  state = {
    newItemVisibility: false,
    newItemTitle: '',
    newItemDesc: ''
  };

  toggleNewItemVisibility = function() {
    this.setState({ newItemVisibility: !this.state.newItemVisibility });
  }

  getDivStyle = function() {
    return { display: !!this.state.newItemVisibility ? 'block' : 'none'};
  }

  updateNewItemDetails = function(evt) {
    this.setState({ [evt.target.name]: evt.target.value });
  }

  addNewItem = function(evt) {
    evt.preventDefault();
    this.props.addNewItem(this.state);
    this.setState({
        newItemVisibility: false,
        newItemTitle: '',
        newItemDesc: ''
    });
  }

  render() {
    return (
        <div>
            <button className='button new-item' onClick={this.toggleNewItemVisibility.bind(this)}>
              <span className='fa fa-plus'></span>
            </button>
            <div className='item-div' style={this.getDivStyle()}>
                <form onSubmit={this.addNewItem.bind(this)}>
                    <table>
                        <tbody>
                            <tr>
                                <td className='header' colSpan='3'>Create a new task</td>
                            </tr>
                            <tr>
                                <td className='label'>Title</td>
                                <td className='input-cell'>
                                    <input
                                    type='text'
                                    name='newItemTitle'
                                    value={this.state.newItemTitle}
                                    onChange={this.updateNewItemDetails.bind(this)}
                                    required />
                                </td>
                                <td className='confirm-cell' rowSpan='2'>
                                    <button type='submit' className='button'><span className='fa fa-check'></span></button>
                                </td>
                            </tr>
                            <tr>
                                <td className='label'>Description</td>
                                <td className='input-cell'>
                                <input
                                    type='text'
                                    name='newItemDesc'
                                    value={this.state.newItemDesc}
                                    onChange={this.updateNewItemDetails.bind(this)} />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </form>
            </div>
        </div>
    );
  };
}

export default AddNewItem;