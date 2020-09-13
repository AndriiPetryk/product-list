import React from 'react';

const ProductTagsLabel = ({ tags }) => tags.map(tagData => <span>{ tagData }</span>);

export default ProductTagsLabel;
