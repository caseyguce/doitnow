import React, { Component } from 'react';

class Delete extends Component {
  render () {
    const { id, deleteItem } = this.props;
    return (
        <button className='button' onClick={deleteItem.bind(this, id)}><span className='fa fa-close'></span></button>
    );
  }
}

export default Delete;