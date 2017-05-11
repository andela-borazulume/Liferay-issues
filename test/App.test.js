import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
// import sinon from "sinon";

import App from "../src/App";
import Chart from "../src/Chart";
import FormContainer from "../src/FormContainer";

describe('<App/>', () => {
  it('it should contain FormContainer component', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.containsMatchingElement(<FormContainer/>)).to.eql(true);
  });

});


