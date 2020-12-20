import React, { Component } from 'react';

class AddMovie extends Component {

    goHome = () => {
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <button
                    type="button"
                    onClick={this.goHome}>
                    Back to Movies
                </button>
                <h1>Hello from AddMovie</h1>
            </div>
        )
    }
}

export default AddMovie;