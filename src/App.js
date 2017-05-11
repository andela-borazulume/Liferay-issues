import React, { Component } from 'react';
import * as githubData from './data';

class App extends Component {
  state = {
    issueList: [],
    fromDate: '',
    toDate: ''
  }

  fetchIssues() {
    const url = 'https://api.github.com/repos/liferay/liferay-portal/issues?per_page=100';
    return fetch(url).then((res) => res.json());
  }

  componentDidMount() {
    this.setState({issueList: githubData.data})
  }

  changeState = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  getIssueRange() {
    let {issueList, fromDate, toDate} = this.state;
    return issueList.filter((issue) => {
      return (new Date(fromDate) <= new Date(issue.created_at)&& new Date(toDate) >= new Date(issue.created_at))
    })
  }

  getNumberOfCloseOpenIssues() {
    let getIssueRange = this.getIssueRange();

    const obj = getIssueRange.reduce((acc, issue) => {
      console.log(issue)
    }, {})
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.getNumberOfCloseOpenIssues();
  }
  
  render() {
    return (
      <form onSubmit={this.onSubmit}>
        From: <input type='date' name='fromDate' onChange={this.changeState} required/>
        To: <input type='date' name='toDate' onChange={this.changeState} required/>
        <input type='submit'/>
      </form>
    );
  }
}

export default App;
