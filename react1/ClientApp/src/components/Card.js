import React, { Component } from 'react';
export const CardList = (props) => (
    <div>
        {props.profiles.map(profile => <Card key={profile.avatar_url}{...profile} />)}
    </div>
);

class Card extends React.Component {
    render() {
        const profile = this.props;
        return (
            <div className="github-profile">
                <img className="myImg" src={profile.avatar_url} />
                <div className="info">
                    <div className="name">{profile.name}</div>
                    <div className="company">{profile.company}</div>
                </div>
            </div>
        );
    }
}