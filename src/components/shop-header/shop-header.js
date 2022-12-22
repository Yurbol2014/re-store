import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCartPlus} from '@fortawesome/free-solid-svg-icons'
import { connect } from 'react-redux';
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from "../../actions";





const ShopHeader = ({ numItems,total }) => {

  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
      
        <div className="shopping-cart ">
        <FontAwesomeIcon icon={faCartPlus} />
        {numItems}items (${total})
        </div>
        
      </Link>
    </header>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) =>{
 
   return {
      items: cartItems,
      total: orderTotal

   }

}


 const mapDispatchToProps = {
  
      onIncrease: bookAddedToCart,
      onDecrease: bookRemovedFromCart,
      onDelete: allBooksRemovedFromCart
   
 }

export default connect(mapStateToProps, mapDispatchToProps)(ShopHeader);