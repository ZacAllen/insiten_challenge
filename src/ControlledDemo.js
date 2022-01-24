import React, { useState } from 'react';
import ReactAnime from 'react-animejs'
import { Container, Col, Row, Button, Form, Dropdown } from 'react-bootstrap';
import Select from 'react-select';
const ControlledDemo = () => {
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
  
    return (
      <div>
        <Anime
          control={control}
          setMeta={setMeta} // important to pull state of the player
          animeConfig={{
            autoplay: false,
            duration: 1500,
            easing: "easeInOutSine"
          }}
          initial={[
            {
              targets: ".tl_square",
              translateX: 250
            },
            {targets: "#creatdeForm",
                    translateY: [-20, 0],
                    begin: function() {
                        document.getElementById('createForm').style.display = "block";
                    }
                },
            {
              targets: ".tl_circle",
              translateX: 250
            },
            {
              targets: ".tl_triangle",
              translateX: 250
            }
          ]}
        >
          <div
            className="tl_square"
            style={{ height: 50, width: 50, background: "#d3f454" }}
          />
          <div
            className="tl_circle"
            style={{
              height: 50,
              width: 50,
              background: "#d3f454",
              borderRadius: "50%"
            }}
          />
          <div
            className="tl_triangle"
            style={{
              height: 50,
              width: 50,
              background: "#d3f454",
              clipPath: "polygon(50% 0, 0 100%, 100% 100%)"
            }}
          />
          <Form id="creatdeForm">
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
              
            </Form>
        </Anime>
        <div
          className="button"onClick={() => {setControl("play")}}> Play</div>
        <div
          className="button"
          onClick={() => {
            setControl("pause");
          }}
        >
          Pause
        </div>
        <div
          className="button"
          onClick={() => {
            setControl("restart");
          }}
        >
          Restart
        </div>
        
      </div>
    );
  };

  export default ControlledDemo