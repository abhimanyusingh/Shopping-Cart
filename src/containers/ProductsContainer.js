import React from "react";
import Product from "../components/Product";
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import { getVisibleProducts } from '../reducers/products'

const ProductsContainer  = ({ products, addToCart }) => {
    return (
      <div className="product__list">
        { products.map((product) => (
            <Product
              key={product.id}
              product={product}
              onAddToCartClicked={() => addToCart(product.id)} />
          ))}
      </div>
    );
}

const mapStateToProps = state => ({
  products: getVisibleProducts(state.products)
})

export default connect(
  mapStateToProps,
  {addToCart}
  )(ProductsContainer);
