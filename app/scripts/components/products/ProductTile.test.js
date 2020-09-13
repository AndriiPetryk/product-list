import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import ProductTile from "./productTile";
import ProductTagsLabel from "./productTagsLabel";
import {beforeEach, describe, it} from "@jest/globals";
configure({adapter: new Adapter()});


const DEFAULT_PROPS = {
  productId: "018",
  productPrice: "20.00",
  imgSrc: "/img/products/N16401_430.png",
  productName: "Damage Reverse Thickening Shampoo",
  aboutProductText: "Dolor voluptate velit consequat duis. Aute ad officia fugiat esse anim exercitation voluptate excepteur pariatur sit culpa duis qui esse. Labore amet ad eu veniam nostrud minim labore aliquip est sint voluptate nostrud reprehenderit. Ipsum nostrud culpa consequat reprehenderit.",
  productTags: [
    "ojon",
    "shampoo"
  ]
};

let wrapper;

const setup = props => shallow(<ProductTile {...DEFAULT_PROPS} />);

describe('ProductTile', () => {
  beforeEach(() => {});

  it('renders correct', () => {
    wrapper = setup();
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(ProductTagsLabel).exists()).toBe(true);
  });
});

