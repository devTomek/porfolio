import React from 'react';
import VideoLayer from "./VideoLayer";
import { shallow } from 'enzyme';

describe('VideoLayer.jsx', () => {
  it('should render', () => {
    const wrapper = shallow(
      <VideoLayer/>
    );

    expect(wrapper).toMatchSnapshot();
  });
});