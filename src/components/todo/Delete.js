import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Delete extends Component {
  render () {
    const { id, deleteItem } = this.props;
    return (
        <button className='button' onClick={deleteItem.bind(this, id)}>
          <span className='fa fa-close'></span>
        </button>
    );
  }
}

Delete.propTypes = {
  id: PropTypes.number.isRequired,
  deleteItem: PropTypes.func.isRequired
}

export default Delete;