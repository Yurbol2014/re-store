import React from "react";
import "./shopping-cart-table.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMinusCircle,
  faPlusCircle,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";

const ShoppingCartTable = () => {
  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <tbody>
          <thead>
            <tr>
              <th>#</th>
              <th>Item</th>
              <th>Count</th>
              <th>Price</th>
              <th>Action</th>
            </tr>

            <tr>
              <td>1</td>
              <td>Site Reliability Engineering</td>
              <td>2</td>
              <td>$40</td>
              <td>
              <button className="btn btn-outline-danger btn-sm float-right">
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
              <button className="btn btn-outline-success btn-sm float-right">
                <FontAwesomeIcon icon={faPlusCircle} />
              </button>
              <button className="btn btn-outline-warning btn-sm float-right">
                <FontAwesomeIcon icon={faMinusCircle} />
              </button>
              </td>
            </tr>
          </thead>
        </tbody>
      </table>
    </div>
  );
};

export default ShoppingCartTable;
