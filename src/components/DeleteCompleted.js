import React, { Component } from 'react';
import '../css/components/DeleteCompleted.css'

class DeleteCompleted extends Component {
    render() {
        return(
            <div>
                <button className='button delete-completed' onClick={this.props.deleteCompleted}>Delete completed items</button>
            </div>
        );
    }
}

export default DeleteCompleted;