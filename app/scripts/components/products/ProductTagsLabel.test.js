import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import ProductTagsLabel from "./productTagsLabel";
import {beforeEach, describe, it} from "@jest/globals";
configure({adapter: new Adapter()});


const DEFAULT_PROPS = {
  tags: [
    "ojon",
    "shampoo"
  ]
};

let wrapper;

const setup = () => shallow(<ProductTagsLabel {...DEFAULT_PROPS} />);

describe('ProductTagsLabel', () => {
  beforeEach(() => {});

  it('renders correct', () => {
    wrapper = setup();
    expect(wrapper.exists()).toBe(true);
  });

  it('components text renders correctly', () => {
    wrapper = setup();
    expect(wrapper.first().text()).toBe('ojon');
    expect(wrapper.at(1).text()).toBe('shampoo');
  });

});

