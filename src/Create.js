import React, { useEffect, useState } from 'react';
import { Container, Col, Row, Button, Form, Dropdown } from 'react-bootstrap';
import Select from 'react-select';
import axios from 'axios';
import ReactAnime from 'react-animejs'
import Swal from 'sweetalert2'


const Create = (props) => {

    const {Anime, stagger} = ReactAnime
    const [control, setControl] = useState(null); //controller state

    const [meta, setMeta] = useState({
        //meta state of the player
        control: control,
        progress: 0,
        currentTime: 0,
        duration: 0
    });
    
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
                    document.getElementById("createForm").style.display = "none";
                    document.getElementById("addCompanyButton").style.display = "inline-block";
                    setControl(["seek", 0])
                    update();
                })  
            }

        
    }
    const hideCreate = () => {
        document.getElementById("createForm").style.display = "none";
        document.getElementById("addCompanyButton").style.display = "inline-block";
        setControl(["seek", 0])
    }
    const showCreate = () => {
        document.getElementById("addCompanyButton").style.display = "none";
        setControl("play");
    }

    const update = () => {
        props.updateList();
    }

    

    return(
        <div className="createFormContainer">
            <div>
                <Button id="addCompanyButton" onClick={() => {showCreate()}}>Add New Company</Button>
            </div>
            <Anime
                control={control}
                setMeta={setMeta}
                animeConfig={{
                    autoplay: false,
                    duration: 200,
                    easing: 'linear'
                }}
                initial={[
                    {
                        targets: "#createForm",
                        translateY: [-20, 0],
                        begin: function() {
                            document.getElementById('createForm').style.display = "block";
                        },
                        opacity: [0, 1]
                    },{
                        //this doesn't work without a second target, empty or not, and I have spent far too long trying to figure out why ¯\_(ツ)_/¯
                        targets: ""
                        
                      }
                ]}
            >
                
                <Form id="createForm">
                <h1 id="createTitle">Create New Company</h1>
                    <Form.Group>
                        <Form.Label>Company Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name" onChange={(e) => setName(e.target.value)}/>
                    </Form.Group>
                    <Form.Label>Status</Form.Label>
                    <Select className="statusSelect" options={options} onChange={(e) => setStatus(e.value)}></Select>
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
                    <Button id="cancelCreate" onClick={hideCreate}>Cancel</Button>
                </Form>
            </Anime>
        </div>
    )
}

export default Create;