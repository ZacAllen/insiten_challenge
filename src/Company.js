import React, {Component, useState, useEffect, useRef, PureComponent} from 'react';
import { Container, Col, Row, Button, Dropdown } from 'react-bootstrap';
import Update from './Update';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'



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
        console.log('Q1 number? ' + parseInt(props.company.finPerformance.Q1))
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

            <Container fluid >
                <div className="companyContainer">
                <Row className="">
                    <Col lg={6} className="companyColLeft">
                        <Container>
                            <Row>
                                <Col>
                                    <div className="titleContainer">
                                        <h2 className="companyName">{props.company.name}</h2>
                                        <Button className="edit mx-2" onClick={() => showEditModal()}>Edit</Button>
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
                        </Container>
                    </Col>
                    <Col lg={2}>
                        <div className="contactsContainer">                   
                            <Dropdown>
                                <Dropdown.Toggle className="viewContacts" id="dropdown-basic">
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
                                        <Bar
                                        data ={{
                                            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                                            datasets: [
                                                {
                                                    label: 'Revenue in USD',
                                                    backgroundColor: '#14636f',
                                                    borderWidth: 1,
                                                    data: [parseInt(props.company.finPerformance.Q1), 
                                                        parseInt(props.company.finPerformance.Q2),
                                                        parseInt(props.company.finPerformance.Q3),
                                                        parseInt(props.company.finPerformance.Q4)]
                                                }
                                            ]
                                        }}
                                        options={{
                                            title: {
                                                display: true,
                                                text: 'Financial Performance per Quarter',
                                                fontSize: 20
                                            },
                                            legend: {
                                                display: true,
                                                position: 'right'
                                            }
                                        }}
                                        />
                                        
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