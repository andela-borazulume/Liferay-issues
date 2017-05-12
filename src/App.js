import React, { Component } from 'react';
import * as githubData from './data';
import FormContainer from './FormContainer';
import ShowChart, { setUpChart } from './showChart';

class App extends Component {
  state = {
    stateObj: {},
    issueList: [],
    fromDate: '',
    toDate: ''
  }

  fetchIssues() {
    const url = 'https://api.github.com/repos/liferay/liferay-portal/issues?per_page=100&state=all';
    return fetch(url).then((res) => res.json());
  }

  componentDidMount() {
    this.fetchIssues()
      .then((issueList) => {
        this.setState({ issueList })
      })
  }

  changeState = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }

  getIssueRange() {
    let { issueList, fromDate, toDate } = this.state;
    return issueList.filter((issue) => {
      return (new Date(fromDate) <= new Date(issue.created_at) && new Date(toDate) >= new Date(issue.created_at))
    })
  }

  getNumberOfCloseOpenIssues() {
    let getIssueRange = this.getIssueRange();
    const obj = getIssueRange.reduce((acc, issue) => {
      acc[issue.state] = (acc[issue.state]) ? acc[issue.state] + 1 : 1
      return acc
    }, {});

    this.setState({ stateObj: obj }, () => {
       setUpChart(this.state.stateObj);
    })
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.getNumberOfCloseOpenIssues();
  }

  render() {
    return (
      <div>
        <FormContainer
          onSubmit={this.onSubmit}
          changeState={this.changeState}/>

        <ShowChart />
        <canvas id="mychart"></canvas>
      </div>
    );
  }
}
export default App;
