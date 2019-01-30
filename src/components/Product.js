import React from "react";

const Product = ({product, onAddToCartClicked}) => (
  <div className="product__item">
    <img alt={product.itemName} src={product.imgSrc} />

    <div className="product__item__name">{product.itemName}</div>

    <div className="product__item__price__quantity">
      <span className="product__item__price">${product.price}</span>
      {product.quantityRemaining >0 ? (
        <span className="product__item__quantity">
          {product.quantityRemaining} In Stock
        </span>
      ): <span className="product__item__quantity-red">No Stock</span>}
    </div>

    <div className="product__item__add">
      {product.quantityRemaining > 0 &&

       <button
          onClick={onAddToCartClicked}>
          Add to Cart
          </button>
      }
    </div>
  </div>
);

export default Product;
