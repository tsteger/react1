//import React, { Component } from 'react'; VitecFetch  fetch('//connect.qa01.maklare.vitec.net/User/GetUser?UserId=CANVANDARE4AE1UTFRNK2CPKMS&CustomerId=S31412', 
//headers.append('Authorization', 'Basic ' + btoa('66' + ':' + 'YSVkjEuQa9LsCoD5UIcB7KOm0hHEQLSDy1O7d1mlFf9rN3KifXPRUNqD3hk2vgyE'));

import React, { Component } from 'react';


export class VitecFetch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
        var settings = {
            "headers": {
                "Authorization": "Basic NjY6WVNWa2pFdVFhOUxzQ29ENVVJY0I3S09tMGhIRVFMU0R5MU83ZDFtbEZmOXJOM0tpZlhQUlVOcUQzaGsydmd5RQ==",
                "cache-control": "no-cache",
                "Postman-Token": "9fe73109-0a25-41fc-903a-c7b13c04ce9c"
            }};
    }

    componentDidMount() {
        fetch("https:connect.qa01.maklare.vitec.net/User/GetUser?UserId=CANVANDARE4AE1UTFRNK2CPKMS&CustomerId=S31412", this.settings)
            .then(lo => console.log(lo))
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                      
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.name}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}