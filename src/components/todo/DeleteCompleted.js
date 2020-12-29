import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../../css/components/todo/DeleteCompleted.css'

class DeleteCompleted extends Component {
    render() {
        return(
            <div className='delete-completed'>
                <button className='button' onClick={this.props.deleteCompleted}>
                    Delete completed items
                </button>
            </div>
        );
    }
}

DeleteCompleted.propTypes = {
    deleteCompleted: PropTypes.func.isRequired
}

export default DeleteCompleted;