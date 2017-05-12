import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import FormContainer from "../src/FormContainer";

describe('<FormContainer/>', () => {
  let wrapper;
  before(() => {
    wrapper = shallow(<FormContainer />);
  })
  it("should render the FormContainer component", () => {
    expect(wrapper.find(FormContainer)).to.have.length(1);
  })
  it('it should have props onSubmit and changeState to FormContainer component', () => {
    expect(wrapper.props().onSubmit).to.be.defined;
    expect(wrapper.props().changeState).to.be.defined;
  });

  it('should have input of length 3', function () {
    expect(wrapper.find('input')).to.have.length(3);
  });

})
