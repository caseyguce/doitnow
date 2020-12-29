import React, { Component } from 'react';
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

export default DeleteCompleted;