import logo from './logo.svg';
import React, {Component} from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Company from './Company';
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

    getCompanyData = () => {
      let appRef = this;
      fetch('companyData.json').then(function(response) {
        console.log(response);
        return response.json();
      })
      .then(function(companyJSON) {
        console.log(companyJSON);
        appRef.setState({companyData: companyJSON.companies, isLoading: false})
      });
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
                    <div id="companyList">
                    {
                      this.state.isLoading ? (
                        <div className="loadingMessage text-center">Loading company data...</div>
                      ) : (
                        // <div><Company company={this.state.companyData[0]}></Company></div>
                        this.state.companyData.map(currentCompany => (
                          <Company company={currentCompany}/>
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
