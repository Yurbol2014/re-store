import React from "react";
import "./shopping-cart-table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { bookAddedToCart, bookRemovedFromCart, allBooksRemovedFromCart } from "../../actions";


import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

const ShoppingCartTable = ({items, total,onIncrease, onDecrease, onDelete}) => {
   const renderRow = (item,idx) => {
      const {id, title, count,total} = item;
      
      return(
       <tr key={id}>
       <td>{idx + 1}</td>
       <td>{title}</td>
       <td>{count}</td>
       <td>{total}</td>
       <td>
         <button
         onClick={()=> onDelete(id)}
         className="btn btn-outline-danger btn-sm float-right">
           <FontAwesomeIcon icon={faTrashAlt} />
         </button>
         <button 
         onClick={()=> onIncrease(id)}
         className="btn btn-outline-success btn-sm float-right">
           <FontAwesomeIcon icon={faPlusCircle} />
         </button>
         <button 
         onClick={()=> onDecrease(id)}
         className="btn btn-outline-warning btn-sm float-right">
           <FontAwesomeIcon icon={faMinusCircle} />
         </button>
         </td>
     </tr> 
      ) 
   }
   return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
         {items.map(renderRow)}
  
        </tbody>
      </table>
      <div className="total">
        Total: ${total}
        
      </div>
    </div>
  );
};

const mapStateToProps = ({shoppingCart: {cartItems, orderTotal}}) =>{
 
   return {
      items: cartItems,
      total: orderTotal,
      

   }

}


 const mapDispatchToProps = {
  
      onIncrease: bookAddedToCart,
      onDecrease: bookRemovedFromCart,
      onDelete: allBooksRemovedFromCart
   
 }

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
