import React from "react";
import {BookstoreService} from '../../services/bookstore-service'
import { useNavigate } from 'react-router-dom';
import BookList from "../book-list";


const HomePage = () => {

   //const navigate = useNavigate()

   const books = [
      {
        id: 1,
        title: "Production-Ready Microser",
        author: "Susan J. Fower",
      },
      {
        id: 2,
        title: "Relese It",
        author: "Michel T.Nygard",
      },
    ];

   return( 
     <BookList books={books}/>
   )

}


export default HomePage;
