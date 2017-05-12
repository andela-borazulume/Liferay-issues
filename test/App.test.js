import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import App from "../src/App";
import Chart from "../src/showChart";
import FormContainer from "../src/FormContainer";

describe('<App/>', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<App />);
  })
  it('it should contain FormContainer component', () => {
    expect(wrapper.containsMatchingElement(<FormContainer />)).to.eql(true);
  });

  it('it should contain Chart component', () => {
    expect(wrapper.containsMatchingElement(<Chart />)).to.eql(true);
  });

  it('it should call componentDidMount', () => {
    sinon.spy(App.prototype, 'componentDidMount');
    const wrapper = mount(<App />);
    expect(App.prototype.componentDidMount.calledOnce).to.equal(true);
  });

  it('it should have method onSubmit', () => {
    sinon.stub(App.prototype, 'getNumberOfCloseOpenIssues', () => null);
    wrapper.instance().onSubmit({preventDefault: () => null});
    expect(App.prototype.getNumberOfCloseOpenIssues.calledOnce).to.equal(true);
  });

   it('it should have method getNumberOfCloseOpenIssues', () => {
    sinon.stub(App.prototype, 'getIssueRange', () => null);
    wrapper.instance().getNumberOfCloseOpenIssues();
    expect(App.prototype.getIssueRange.calledOnce).to.equal(true);
  });

    it('it should have an initial state ', () => {
    expect(wrapper.state('issueList')).to.eql([]);
    expect(wrapper.state('stateObj')).to.eql({});
    expect(wrapper.state('fromDate')).to.eql('');
    expect(wrapper.state('toDate')).to.eql('');
  });

   it('it should update state of issueList', () => {
    const wrapper = shallow(<App />);
    const mockData = ['random', 'data', 'works'];
    wrapper.setState({ issueList: mockData });
    expect(wrapper.state('issueList')).to.eql(mockData);
  });
});


