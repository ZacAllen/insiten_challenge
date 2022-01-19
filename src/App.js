import logo from './logo.svg';
import React, {Component} from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
      super(props);

      this.state = {
        isLoading: true,
        companyData: {}
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
        appRef.setState({companyData: companyJSON, isLoading: false})
      });
    }


    render() {
      return (
        <div></div>
      )
    }
  }

export default App;
