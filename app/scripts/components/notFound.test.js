import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import NotFound from "./notFound";
import {beforeEach, describe, it} from "@jest/globals";
configure({adapter: new Adapter()});

let wrapper;

const setup = () => shallow(<NotFound />);

describe('NotFound', () => {
  beforeEach(() => {});

  it('renders correct', () => {
    wrapper = setup();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('div').text()).toEqual('Products not found!')
  });
});

