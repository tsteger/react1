import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

export class Rubrik extends React.Component {



    render() {
        return (
            <p className="name">{this.props.rubrik} </p>
        );
    }
}