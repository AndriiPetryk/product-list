import React from 'react';
import PropTypes from 'prop-types';
import ProductTagsLabel from './ProductTagsLabel';

const ProductTile = ({
     imgSrc,
     productId,
     productName,
     productPrice,
     aboutProductText,
     productTags
   }) => {

    return (
      <div
        key={+productId}
        className='wrapper'
        style={{ backgroundImage: `url(${imgSrc})` }}
      >
        <div className="productTileContent">
            <ProductTagsLabel tags={productTags} />
            <div className="productName">{productName}</div>
            <p>{productPrice}</p>
        </div>
        <div className='productTileHoverContent'>{aboutProductText}</div>
      </div>
    );
};

ProductTile.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  productId: PropTypes.string.isRequired,
  aboutProductText: PropTypes.string.isRequired,
  productName: PropTypes.string.isRequired,
  productPrice: PropTypes.string.isRequired,
  productTags: PropTypes.arrayOf(PropTypes.string).isRequired
};

export default ProductTile;
