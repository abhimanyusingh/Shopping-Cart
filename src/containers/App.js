import React, { Component } from 'react';
import { Provider } from 'react-redux'

import ConfigureStore from '../ConfigureStore';
import ProductsContainer from '../containers/ProductsContainer'
import Header from '../components/Header'
import CartContainer from '../containers/CartContainer'

import './App.scss';

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <div className="container">
        <Provider store= {store} >
            <Header />
            <div className="wrapper">
              <div className="product">
                <ProductsContainer />
                <CartContainer />
              </div>
            </div>
        </Provider>
      </div>
    );
  }
}

export default App;
