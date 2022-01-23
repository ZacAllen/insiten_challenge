import logo from './logo.svg';
import React, {Component} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import axios from 'axios';
import Company from './Company';
import Create from './Create';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        companyData: []
      }
      
    }
    componentDidMount() {
      this.getCompanyData()
    }

    getCompanyData = async() => {
      console.log('updatinglist')
      const response = await axios.get('https://61e9f12e7bc0550017bc64f1.mockapi.io/api/companies')
        .catch(function(error) {
          if (error.response) {
            console.log(error.response.data);
          }
        });
        if (response) {
          console.log(response.data)
          this.setState({companyData: response.data, isLoading: false})
        }
    }


    render() {
      return (
        <div className="App justify-content-center">
            <Container fluid>
              <Row className="">
                <Col>
                  <div className="titleContainer">
                    <h1 id="title">Company Tracker App</h1>
                  </div>
                </Col>
              </Row>
              <Row className="">
                <Col>
                  <div className="companyListContainer">
                    <Create updateList={this.getCompanyData}></Create>
                    <div id="companyList">
                    {
                      this.state.isLoading ? (
                        <div className="loadingMessage text-center">Loading company data...</div>
                      ) : (
                        // <div><Company company={this.state.companyData[0]}></Company></div>     
                        this.state.companyData.map(currentCompany => (       
                          <Company company={currentCompany} updateList={this.getCompanyData}/>                 
                        ))
                      )
                    }
                    </div>
                  </div>
                </Col>
              </Row>
            </Container>
        </div>
      )
    }
  }

export default App;
