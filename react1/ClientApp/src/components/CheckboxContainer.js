import React from 'react';
//import PropTypes from 'prop-types';
import checkboxes from './chkbox/checkboxes';
import Checkbox from './chkbox/checkbox';

import { Container } from 'reactstrap';
import { Row } from 'reactstrap';
import { Col } from 'reactstrap';
import './chkbox/chkbox.css';
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
        console.log(e.target.checked);
    }

    render() {
        return (
            <Container>
                <Row>
                    <React.Fragment>
                        {

                            checkboxes.map(item => (
                                <div className="chk_box_container" key={item.key}>

                                    <Col md={12} lg={6}>
                                        <label className="form_label" key={item.key}>
                                            <Checkbox name={item.name} checked={this.state.checkedItems.get(item.name)} onChange={this.handleChange} />
                                            <span className="chk_box_text">{item.name}</span>
                                        </label>
                                    </Col>


                                </div>
                            ))

                        }

                    </React.Fragment>
                </Row>
            </Container>
        );
    }
}

