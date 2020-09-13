import React from 'react';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import Home from "./Home";
import ProductTile from './products/productTile';
import {beforeEach, describe, it} from "@jest/globals";
configure({adapter: new Adapter()});
import { Context } from '../context';

  const state =  [
    {
    "_id": "018",
    "isActive": "true",
    "price": "20.00",
    "picture": "/img/products/N16401_430.png",
    "name": "Damage Reverse Thickening Shampoo",
    "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
    "tags": [
      "ojon",
      "shampoo"
    ]
  },
    {
      "_id": "019",
      "isActive": "false",
      "price": "23.00",
      "picture": "/img/products/N16501_430.png",
      "name": "Damage Reverse Thickening Conditioner",
      "about": "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
      "tags": [
        "ojon",
        "conditioner"
      ]
    },
  ]

let wrapper;

const TestComponent = () => (
  <Context.Provider value={{
    state
  }}>
    <Home />
  </Context.Provider>
);
const element = mount(<TestComponent />);

describe('Home', () => {
  beforeEach(() => {});

  it('renders correct', () => {
    wrapper = element;
    expect(wrapper.exists()).toBe(true);
  });

  it('components renders correctly', () => {
    wrapper = element;
    expect(wrapper.find(ProductTile).exists()).toBe(true);
  });

});

