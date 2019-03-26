import React from 'react';
//import PropTypes from 'prop-types';
import checkboxes from './checkboxes';
import Checkbox from './Checkbox';

import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';

export class CheckboxContainer extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            checkedItems: new Map(),
        }

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        const item = e.target.name;
        const isChecked = e.target.checked;
        this.setState(prevState => ({ checkedItems: prevState.checkedItems.set(item, isChecked) }));
        console.log(e.target.name);
    }

    render() {
        return (
            <React.Fragment>
                {

                    checkboxes.map(item => (
                        <Container key={item.key}>
                            <Row>
                                <Col lg={6}>
                                    <label key={item.key}>
                                        <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                        {item.name}
                                    </label>
                                </Col>
                            </Row>
                        </Container>
                    ))
                }
            </React.Fragment>
        );
    }
}

