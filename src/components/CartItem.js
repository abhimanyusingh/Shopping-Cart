import React from 'react';
import ProductQunatity from './ProductQunatity'
const CartItem = ({product, onRemoveClicked}) => (
    <div className="product__cart__item">
        <div>
            <span>
                <img alt={product.itemName} src={product.imgSrc}/>
            </span>
             {<ProductQunatity product = {product} />}
        </div>

        <div>
            <span className="product__cart__price__calc">
                @ ${product.price}each = ${product.price * product.quantity}
            </span>
            
            <span className="product__cart__price__delete" 
                onClick={onRemoveClicked}>
                Delete
            </span>
        </div>
    </div>
)

  
export default CartItem;