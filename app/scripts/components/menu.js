/**
 * This file will hold the Menu that lives at the top of the Page, this is all rendered using a React Component...
 *
 */
import React, { useState, useContext }  from 'react';
import { getFilteredProductData, getProductData } from '../enums/api';
import { Context } from '../context'
import { FIND_PRODUCT_DATA, GET_DEFAULT_PRODUCT_DATA } from "../constants/constants";

const Menu = () => {

    const [showingSearch, setShowingSearch] = useState(false);
    const [searchInputValue, setSearchInputValue] = useState('');
    const { setProductState, setLoadingState } = useContext(Context);

    /**
     * Main constructor for the Menu Class
     * @memberof Menu
     */

    /**
     * Shows or hides the search container
     * @memberof Menu
     * @param e [Object] - the event from a click handler
     */
    const showSearchContainer = event => {
        event.preventDefault();
        setShowingSearch(!showingSearch);
    }

    const onClearInputSearch = () => {
        setSearchInputValue('');
        setLoadingState(true);
        getProductData().then((productList) => {
            setProductState({
                type: GET_DEFAULT_PRODUCT_DATA,
                payload: productList
            });
            setLoadingState(false);
        });
    }

    /**
     * Calls upon search change
     * @memberof Menu
     * @param e [Object] - the event from a text change handler
     */
    const onSearch = event => {
        setSearchInputValue(event.target.value);
    }

    const getSearchedTerm = () => {
        setLoadingState(true);
        getFilteredProductData(searchInputValue).then(profileData => {
            setProductState({
                type: FIND_PRODUCT_DATA,
                payload: profileData
            });
            setLoadingState(false);
        });
    }

    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
    */
        return (
            <header className="menu">
                <div className="menu-container">
                    <div className="menu-holder">
                        <h1>ELC</h1>
                        <nav>
                            <a href="#" className="nav-item">HOLIDAY</a>
                            <a href="#" className="nav-item">WHAT'S NEW</a>
                            <a href="#" className="nav-item">PRODUCTS</a>
                            <a href="#" className="nav-item">BESTSELLERS</a>
                            <a href="#" className="nav-item">GOODBYES</a>
                            <a href="#" className="nav-item">STORES</a>
                            <a href="#" className="nav-item">INSPIRATION</a>

                            <a href="#" onClick={showSearchContainer}>
                                <i className="material-icons search">search</i>
                            </a>
                        </nav>
                    </div>
                </div>
                <div className={(showingSearch ? "showing " : "") + "search-container"}>
                    <input
                      value={searchInputValue}
                      type="text"
                      onChange={onSearch}
                      onKeyDown={e => {
                          if (e.keyCode === 13) {
                              e.preventDefault();
                              getSearchedTerm();
                          }
                      }}
                    />
                    <a href="#" onClick={ onClearInputSearch }>
                        <i className="material-icons close">close</i>
                    </a>
                </div>
            </header>
        );


}

// Export out the React Component
module.exports = Menu;
