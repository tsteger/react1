import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export class OtherInformation extends React.Component {

    state = { otherInformation: '' };
    handleSubmit =  (event) => {
        event.preventDefault();
        console.log(" GO-" + this.state.otherInformation);
       
    };
    

    render() {
        return (
            <Form onSubmit={this.handleSubmit}>
                <FormGroup>
                    <Col>
                        <Label for="exampleText">Övrigt</Label>                       
                        <Input
                            type="text"                                                                             
                            name="text"
                            id="exampleText"
                            value={this.state.otherInformation}
                            onChange={event => this.setState({ otherInformation: event.currentTarget.value })}
                        />
                    </Col>
                </FormGroup>
            </Form >
        );
    }
}