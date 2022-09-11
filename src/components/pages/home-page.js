import React from "react";
import {BookstoreService} from '../../services/bookstore-service'
import { useNavigate } from 'react-router-dom';
import BookList from "../book-list";


const HomePage = () => {

   //const navigate = useNavigate()



   return( 
     <BookList/>
   )

}


export default HomePage;
