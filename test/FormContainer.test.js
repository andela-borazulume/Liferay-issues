import React from "react";
import { shallow, mount } from "enzyme";
import { expect } from "chai";
import sinon from "sinon";

import FormContainer from "../src/FormContainer";

describe('<FormContainer/>', () => {
  it('it should have props onSubmit and changeState to FormContainer component', () => {
    const getDataMethod = '';
    const FormContainer = shallow(<FormContainer />);
    expect(FormContainer.prop('...getDataMethod')).to.eql(onSubmit);
    expect(FormContainer.prop('...getDataMethod')).to.eql(changeState);
  });

})
