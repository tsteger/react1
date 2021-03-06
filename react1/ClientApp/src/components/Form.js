﻿import React, { Component } from 'react';

export class Form extends React.Component {

    state = { userName: '' };
    handleSubmit = async (event) => {
        event.preventDefault();
        // const resp = await axios.get(`https://api.github.com/users/${this.state.userName}`);
        //  console.log(resp);
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input
                    type="text"
                    value={this.state.userName}
                    onChange={event => this.setState({ userName: event.target.value })}
                    placeholder="GitHub username"
                    required />
                <button>Add card</button>
            </form>
        );
    }
}