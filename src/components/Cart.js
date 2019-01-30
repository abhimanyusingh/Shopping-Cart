import React from 'react';
import { connect } from 'react-redux';
import CartItem from './CartItem';
import { removeProductFromTheCart } from '../actions'

const Cart = ({ products, total, onCheckoutClicked, dispatch }) => {
    const hasProducts = products.length > 0
    const title = (products.length) + (products.length >1 ? ' items' : ' item')

    return (
        <React.Fragment>
        { 
            hasProducts >0  && 
                <div className="product__cart">
                    <div className="product__cart__header">
                        <h2>Shopping Cart</h2>
                        <div>{title}</div>
                    </div>
                    
                    {
                        products.map((product) => (
                            <CartItem 
                                key={product.id}
                                product={product} 
                                onRemoveClicked = {() => {
                                    removeProductFromTheCart(product.id, dispatch)
                                }}
                            />
                        ))
                    }
                    
                    <div className="product__cart__total__container">
                        <div className="product__cart__total">
                            Total: &#36;{total}
                        </div>
                    </div>

                    <button 
                        className="product__cart__purchase__button" 
                        onClick={onCheckoutClicked}
                        disabled={hasProducts ? '' : 'disabled'}>
                        Confirm Purchase
                    </button>

                </div>
        }
        </React.Fragment>
    )
}

export default connect()(Cart);