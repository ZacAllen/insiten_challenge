import React, {Component, useState, useEffect, useRef} from 'react';
import { Container, Col, Row, Button, Dropdown } from 'react-bootstrap';
import Update from './Update';
import axios from 'axios';

const Company = (props) => {

    const [editClicked, showEdit] = useState(false)
    const [key, setKey] = useState(0);
    const [id, setID] = useState(0)

    const showEditModal = () => {
        showEdit(true);
        setKey(key + 1);
    }

    useEffect(() => { 
        setID(props.company.id);    
        console.log("component id:" + id);
    });

    const deleteCompany = () => {
        console.log("deleting component with id:" + id)
        axios.delete(`https://61e9f12e7bc0550017bc64f1.mockapi.io/api/companies/${id}`)
        .catch(function(error) {
            if (error.response) {
                console.log(error.response.data);
            }
        }).then(function() {
            props.updateList();
        })
          
    }

    return (

            <Container fluid style={{overflow: 'auto'}}>
                <div className="companyContainer">
                <Row className="">
                    <Col lg={8} className="">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="titleContainer">
                                        <h2 className="companyName">{props.company.name}</h2>
                                        <Button className="edit" onClick={() => showEditModal()}>Edit</Button>
                                        {
                                            editClicked ? (<Update showModal={true} key={key} company={props.company} updateList={props.updateList}/>) : null
                                        }
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="infoContainer">
                                        <p className="companyInfo">{props.company.info}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="contactsContainer">                   
                                        <Dropdown>
                                            <Dropdown.Toggle id="dropdown-basic">
                                                View Contacts
                                            </Dropdown.Toggle>

                                            <Dropdown.Menu>
                                                <Dropdown.Item>{props.company.contacts[0].name + ": " + props.company.contacts[0].phone}</Dropdown.Item>
                                                <Dropdown.Item>{props.company.contacts[1].name + ": " + props.company.contacts[1].phone}</Dropdown.Item>
                                                <Dropdown.Item>{props.company.contacts[2].name + ": " + props.company.contacts[2].phone}</Dropdown.Item>
                                            </Dropdown.Menu>
                                        </Dropdown>

                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                    <Col lg={4} className="">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="statusContainer">
                                        <h2 className="companyStatus">{props.company.status}</h2>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="finPerformanceContainer">
                                        <p className="companyFinPerformance">{props.company.finPerformance.toString()}</p>
                                    </div>
                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <div className="delteContainer">
                                        <Button className="delete" onClick={() => deleteCompany(id)}>Delete</Button>
                                    </div>
                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </Row>
                </div>
            </Container>

    )
}

export default Company;