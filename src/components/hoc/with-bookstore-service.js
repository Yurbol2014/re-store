import React from "react";
import { BookstoreServiceConsumer } from "../book-service-context";


const withBookstoreService = () => (Wraped) =>{

   return (props) => {

      return (

         <BookstoreServiceConsumer>
            {
               (bookstorService)=>{
                 return ( <Wraped{...props}
                  bookstorService ={bookstorService}/>)

               }
            }
         </BookstoreServiceConsumer>

      )
   }

}

export default withBookstoreService;