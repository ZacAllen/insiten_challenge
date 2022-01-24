import React, { useState, useEffect } from 'react';
import { Container, Col, Row, Button, Form, Dropdown, Modal } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import Swal from 'sweetalert2'

const Update = (props) => {

    const [show, setShow] = useState(props.showModal);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [id, setID] = useState(props.company.id);
    const [name, setName] = useState(props.company.name);
    const [status, setStatus] = useState(props.company.status);
    const [info, setInfo] = useState(props.company.info);
    const [contact1, setContact1] = useState(props.company.contacts[0].name);
    const [contact2, setContact2] = useState(props.company.contacts[1].name);
    const [contact3, setContact3] = useState(props.company.contacts[2].name);
    const [phone1, setPhone1] = useState(props.company.contacts[0].phone);
    const [phone2, setPhone2] = useState(props.company.contacts[1].phone);
    const [phone3, setPhone3] = useState(props.company.contacts[2].phone);
    const [Q1, setQ1] = useState(props.company.finPerformance.Q1)
    const [Q2, setQ2] = useState(props.company.finPerformance.Q2)
    const [Q3, setQ3] = useState(props.company.finPerformance.Q3)
    const [Q4, setQ4] = useState(props.company.finPerformance.Q4)

    const options = [
        {value: 'researching', label: 'Researching'},
        {value: 'pending', label: 'Pending'},
        {value: 'approved', label: 'Approved'},
        {value: 'declined', label: 'Declined'}
    ]
    
    useEffect(() => {     
        console.log(show);
    });

    const saveChanges = () => {
        if(!/\S/.test(name) || !/\S/.test(contact1) || !/\S/.test(contact2) || !/\S/.test(contact3) || !/\S/.test(phone1) || !/\S/.test(phone2) ||
            !/\S/.test(phone3) || !/\S/.test(Q1) || !/\S/.test(Q2) || !/\S/.test(Q3) || !/\S/.test(Q4)) {
                Swal.fire({
                    customClass: {
                        confirmButton: 'btn btn-primary mx-2',
                        text: 'companyInfo'
                    },
                    text: "Please fill in all fields!",
                })
            } else {
                handleClose();
                updateCompany();
            }
        
    }

    const updateCompany = () => {
        
        let updatedCompany = {
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
        axios.put(`https://61e9f12e7bc0550017bc64f1.mockapi.io/api/companies/${id}`, updatedCompany)
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

    return (
        <div>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Company</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form>
                        <Form.Group>
                            <Form.Label>Company Name</Form.Label>
                            <Form.Control type="text" defaultValue={name} onChange={(e) => setName(e.target.value)}/>
                        </Form.Group>
                        <Form.Label>Status</Form.Label>
                        <Select defaultValue={options.find(op => op.value == status)} options={options} onChange={(e) => setStatus(e.value)}></Select>
                        <Form.Group>
                            <Form.Label>Company Info</Form.Label>
                            <Form.Control type="text" defaultValue={info} onChange={(e) => setInfo(e.target.value)}/>
                        </Form.Group>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Contact 1 Name</Form.Label>
                                <Form.Control defaultValue={contact1} onChange={(e) => setContact1(e.target.value)}/>
                                <Form.Label>Contact 1 Phone</Form.Label>
                                <Form.Control defaultValue={phone1} onChange={(e) => setPhone1(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Contact 2 Name</Form.Label>
                                <Form.Control defaultValue={contact2} onChange={(e) => setContact2(e.target.value)}/>
                                <Form.Label>Contact 2 Phone</Form.Label>
                                <Form.Control defaultValue={phone2} onChange={(e) => setPhone2(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Contact 3 Name</Form.Label>
                                <Form.Control defaultValue={contact3} onChange={(e) => setContact3(e.target.value)}/>
                                <Form.Label>Contact 3 Phone</Form.Label>
                                <Form.Control defaultValue={phone3} onChange={(e) => setPhone3(e.target.value)}/>
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group as={Col}>
                                <Form.Label>Q1 Earnings</Form.Label>
                                <Form.Control defaultValue={Q1} onChange={(e) => setQ1(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Q2 Earnings</Form.Label>
                                <Form.Control defaultValue={Q2} onChange={(e) => setQ2(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Q3 Earnings</Form.Label>
                                <Form.Control defaultValue={Q3} onChange={(e) => setQ3(e.target.value)}/>
                            </Form.Group>
                            <Form.Group as={Col}>
                                <Form.Label>Q4 Earnings</Form.Label>
                                <Form.Control defaultValue={Q4} onChange={(e) => setQ4(e.target.value)}/>
                            </Form.Group>
                        </Row>
                    </Form>
                </Modal.Body>

                <Modal.Footer>
                    <Button className="closeEdit" onClick={handleClose}>Close</Button>
                    <Button onClick={saveChanges}>Save changes</Button>
                </Modal.Footer>
            </Modal>
        </div>
    )
}

export default Update;