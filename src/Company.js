import React, {Component, useState, useEffect, useRef, PureComponent} from 'react';
import { Container, Col, Row, Button, Dropdown } from 'react-bootstrap';
import Update from './Update';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from 'chart.js/auto'
import { Chart }            from 'react-chartjs-2'
import Swal from 'sweetalert2'




const Company = (props) => {

    const [editClicked, showEdit] = useState(false)
    const [key, setKey] = useState(0);
    const [id, setID] = useState(0);
    const [statusColor, setStatusColor] = useState({
        backgroundColor: '#2CDB66'
    })

    const showEditModal = () => {
        showEdit(true);
        setKey(key + 1);
    }

    useEffect(() => { 
        setID(props.company.id); 
        
    });
    useEffect(() => {
        switch(props.company.status) {
            case 'approved':
                setStatusColor({
                    backgroundColor: '#2CDB66'
                });
                break;
            case 'pending':  
                setStatusColor({
                    backgroundColor: '#ECF23D'
                });
                break;
            case 'researching':
                setStatusColor({
                    backgroundColor: '#33AAFF'
                });
                break;
            case 'declined': 
                setStatusColor({
                    backgroundColor: '#C90B00'
                });
                break; 
        }
    }, [props.company.status])

    const deleteCompany = () => {
        Swal.fire({
            customClass: {
                confirmButton: 'btn btn-primary mx-2',
                cancelButton: 'btn btn-primary mx-2',
                title: 'companyName',
                text: 'companyInfo'
            },
            title: "Delete this company?",
            text: "You won't be able to reverse this!",
            showCancelButton: true,
            cancelButtonColor: '#a8afb3',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                // console.log("deleting component with id:" + id)
                axios.delete(`https://61e9f12e7bc0550017bc64f1.mockapi.io/api/companies/${id}`)
                .catch(function(error) {
                    if (error.response) {
                        console.log(error.response.data);
                    }
                }).then(function() {
                    props.updateList();
                })
            }
        })
        
          
    }

    return (
            <Container fluid >
                <div className="companyContainer">
                <Row className="">
                    <Col lg={6} >
                        <Container className="companyColLeft">
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
                            <Row>
                                <Col>
                                    <div className="statusContainer">
                                        <h2 className="companyStatus">{props.company.status}</h2>
                                        <span className="statusDot" style={statusColor}></span>
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
                                    <div className="finPerformanceContainer">
                                        <Bar
                                        data={{
                                            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
                                            datasets: [
                                                {
                                                    label: 'Revenue (USD)',
                                                    backgroundColor: '#e39e68',
                                                    borderWidth: 1,
                                                    data: [parseInt(props.company.finPerformance.Q1.replace(/,/g, ''), 10), 
                                                        parseInt(props.company.finPerformance.Q2.replace(/,/g, ''), 10),
                                                        parseInt(props.company.finPerformance.Q3.replace(/,/g, ''), 10),
                                                        parseInt(props.company.finPerformance.Q4.replace(/,/g, ''), 10)]
                                                }
                                            ]
                                        }}
                                        height={200}
                                        options={{
                                            plugins: {
                                                legend: {
                                                    display: false,
                                                    position: 'right'
                                                },
                                                title: {
                                                    display: true,
                                                    text: 'Financial Performance per Quarter',
                                                    font: {
                                                        size: 24
                                                    }
                                                },
                                                   
                                            }
                                            
                                        }}
                                        /> 
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