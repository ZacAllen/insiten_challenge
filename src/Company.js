import React, {Component, useState, useEffect, useRef} from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';

const Company = (props) => {

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
                                        <Button className="edit">Edit</Button>
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
                                        {/* change to dropdown later */}
                                        <p className="companyContacts">{props.company.contacts.toString()}</p>
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
                                        {/* change to dropdown later */}
                                        <Button className="delete">Delete</Button>
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