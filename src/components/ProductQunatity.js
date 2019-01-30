import React from 'react'
import {connect} from 'react-redux';

const ProductQunatity  =  ({product, dispatch}) => {
    const decreaseItemQuantity = () => {
        dispatch({
            type: "DECREASE_QUANTITY",
            productId: product.id
        })
    }

    const increaseItemQuantity = () => {
         dispatch({
            type: "INCREASE_QUANTITY",
            productId: product.id
        })
    }

    return (
        <span className="product__cart__item__quantity">
            <button disabled = { product.quantity === 1}  onClick={decreaseItemQuantity}>-</button>
            <span className="product__cart__item__quantity_count">{product.quantity}</span>
            <button disabled = {product.quantityRemaining < 1} onClick={increaseItemQuantity}>+</button>
        </span>
    )
}


export default connect()(ProductQunatity);