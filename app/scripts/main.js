/**
 * The Initial React Setup file
 * ...
 *
 * === CSS
 * The stylesheets are handled seperately using the gulp sass rather than importing them directly into React.
 * You can find these in the ./app/sass/ folder
 *
 * == JS
 * All files in here start from this init point for the React Components.
 *
 *
 * Firstly we need to import the React JS Library
 */
import React, {useEffect, useReducer, useState} from 'react';
import ReactDOM from 'react-dom';

import Menu from './components/menu';
import Home from './components/home';
import Loader from './components/loader';
import NotFound from './components/notFound';
import { getProductData } from "./enums/api";
import { GET_PRODUCT_DATA, IS_LOADING } from "./constants/constants";
import { Context } from './context'
import reducer from "./reducer";




/**
 * We can start our initial App here in the main.js file
 */
export const App = () => {
  const [state, setProductState] = useReducer(reducer, []);
  const [loadingState, setLoadingState] = useReducer(reducer, false);
  const [isNotFound, setFoundState] = useState(false);



  useEffect(()=> {
    onSetLoadingState(true);
    getProductData().then( productList => {
      setProductState({
        type: GET_PRODUCT_DATA,
        payload: productList
      });
      onSetLoadingState(false);
    });

  }, []);

  useEffect(() => {
    setFoundState(state.length === 0 ? true : false);
  }, [state])


    /**
     * Renders the default app in the window, we have assigned this to an element called root.
     *
     * @returns JSX
     * @memberof App
    */

    const onSetLoadingState = state => {
      setLoadingState({
        type: IS_LOADING,
        payload: state
      });
    }

    let content = <Home />;

    if (loadingState) {
      content = <Loader/>;
    }

    if (isNotFound && !loadingState) {
      content = <NotFound />;
    }

    return (
      <Context.Provider value={{
        state,
        setProductState,
        setLoadingState
      }}>
        <div className="App">
            <Menu />
          {content}
        </div>
      </Context.Provider>
    );

}

// Render this out
ReactDOM.render(<App />, document.getElementById('root'));
