import React, { useState } from 'react';
import { Container, Col, Row, Button, Form, Dropdown } from 'react-bootstrap';
import Select from 'react-select';

const Create = (props) => {

    const options = [
        {value: 'researching', label: 'Researching'},
        {value: 'pending', label: 'Pending'},
        {value: 'approved', label: 'Approved'},
        {value: 'declined', label: 'Declined'}

    ]

    const createCompany = () => {

    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name"/>
                </Form.Group>
                <Select options={options}></Select>
                <Form.Group>
                    <Form.Label>Company Info</Form.Label>
                    <Form.Control type="text" placeholder="Enter company info"/>
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Contact 1 Name</Form.Label>
                        <Form.Control/>
                        <Form.Label>Contact 1 Phone</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact 2 Name</Form.Label>
                        <Form.Control/>
                        <Form.Label>Contact 2 Phone</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact 3 Name</Form.Label>
                        <Form.Control/>
                        <Form.Label>Contact 3 Phone</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Q1 Earnings</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Q2 Earnings</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Q3 Earnings</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Q4 Earnings</Form.Label>
                        <Form.Control/>
                    </Form.Group>
                </Row>
                <Button onClick={createCompany} type='submit'>Add New</Button>
            </Form>
        </div>
    )
}

export default Create;