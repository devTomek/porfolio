import React from "react";
import { shallow } from "enzyme";
import HeaderContainer from "./HeaderContainer";

let wrapper;

describe("HeaderContainer.jsx", () => {
  beforeEach(() => {
    wrapper = shallow(<HeaderContainer />);
  });

  it("should toggle navbar", () => {
    expect(wrapper.state("isOpen")).toBe(false);
    wrapper.instance().toggle();
    expect(wrapper.state("isOpen")).toBe(true);
  });
});
