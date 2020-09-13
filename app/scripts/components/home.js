/**
 * This file will hold the Main content that lives in the main body of the site
 *
 */
import React, { useContext } from 'react';
import ProductTile from './products/productTile';
import { Context } from '../context'


const Home = () => {
  const { state } = useContext(Context);

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof Home
    */
        return (
            <section id="home">
                <div className="content">
                    <div className='productsWrap'>
                      {
                        state.map(product => {
                          const {
                                  _id: productId,
                                  price: productPrice,
                                  picture: imgSrc,
                                  name: productName,
                                  about: aboutProductText,
                                  tags: productTags
                                } = product;

                          return <div key={+productId} className="column">
                                   <ProductTile  imgSrc={imgSrc}
                                                 productId={productId}
                                                 productName={productName}
                                                 productPrice={productPrice}
                                                 aboutProductText={aboutProductText}
                                                 productTags={productTags}
                                   />
                                </div>

                        })
                      }

                    </div>
                </div>
            </section>
        );

}

// Export out the React Component
module.exports = Home;
