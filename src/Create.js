import React, { useState } from 'react';
import { Container, Col, Row, Button, Form, Dropdown } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';

const Create = (props) => {

    const [name, setName] = useState('');
    const [status, setStatus] = useState('');
    const [info, setInfo] = useState('');
    const [contact1, setContact1] = useState('');
    const [contact2, setContact2] = useState('');
    const [contact3, setContact3] = useState('');
    const [phone1, setPhone1] = useState('');
    const [phone2, setPhone2] = useState('');
    const [phone3, setPhone3] = useState('');
    const [Q1, setQ1] = useState('')
    const [Q2, setQ2] = useState('')
    const [Q3, setQ3] = useState('')
    const [Q4, setQ4] = useState('')

    const options = [
        {value: 'researching', label: 'Researching'},
        {value: 'pending', label: 'Pending'},
        {value: 'approved', label: 'Approved'},
        {value: 'declined', label: 'Declined'}

    ]

    const createCompany = () => {
        let newCompany = {
            'name': name,
            'status': status,
            'info': info,
            'contacts': [
                {
                    'name': contact1,
                    'phone': phone1
                },
                {
                    'name': contact2,
                    'phone': phone2
                },
                {
                    'name': contact3,
                    'phone': phone3
                }
            ],
            'finPerformance': {
                'Q1': Q1,
                'Q2': Q2,
                'Q3': Q3,
                'Q4': Q4
            }
        }
        axios.post('https://61e9f12e7bc0550017bc64f1.mockapi.io/api/companies/', newCompany)
        .catch(function(error) {
            if (error.response) {
              console.log(error.response.data);
            }
        })
        .then(function() {
            update();
        })  
    }

    const update = () => {
        props.updateList();
    }

    return(
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Company Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
                </Form.Group>
                <Form.Label>Status</Form.Label>
                <Select options={options} onChange={(e) => setStatus(e.value)}></Select>
                <Form.Group>
                    <Form.Label>Company Info</Form.Label>
                    <Form.Control type="text" placeholder="Enter company info" onChange={(e) => setInfo(e.target.value)}/>
                </Form.Group>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Contact 1 Name</Form.Label>
                        <Form.Control onChange={(e) => setContact1(e.target.value)}/>
                        <Form.Label>Contact 1 Phone</Form.Label>
                        <Form.Control onChange={(e) => setPhone1(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact 2 Name</Form.Label>
                        <Form.Control onChange={(e) => setContact2(e.target.value)}/>
                        <Form.Label>Contact 2 Phone</Form.Label>
                        <Form.Control onChange={(e) => setPhone2(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Contact 3 Name</Form.Label>
                        <Form.Control onChange={(e) => setContact3(e.target.value)}/>
                        <Form.Label>Contact 3 Phone</Form.Label>
                        <Form.Control onChange={(e) => setPhone3(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group as={Col}>
                        <Form.Label>Q1 Earnings</Form.Label>
                        <Form.Control onChange={(e) => setQ1(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Q2 Earnings</Form.Label>
                        <Form.Control onChange={(e) => setQ2(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Q3 Earnings</Form.Label>
                        <Form.Control onChange={(e) => setQ3(e.target.value)}/>
                    </Form.Group>
                    <Form.Group as={Col}>
                        <Form.Label>Q4 Earnings</Form.Label>
                        <Form.Control onChange={(e) => setQ4(e.target.value)}/>
                    </Form.Group>
                </Row>
                <Button onClick={createCompany}>Add New</Button>
            </Form>
        </div>
    )
}

export default Create;