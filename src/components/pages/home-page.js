import React from "react";
import {BookstoreService} from '../../services/bookstore-service'

import BookList from "../book-list";
import ShoppingCarrTable from "../shopping-cart-table";

const HomePage = () => {

   //const navigate = useNavigate()



   return( 
      <div>
     <BookList/>
     <ShoppingCarrTable/>
     </div>
   )

}


export default HomePage;
