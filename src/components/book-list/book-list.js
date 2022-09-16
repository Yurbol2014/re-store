import React,{Component} from "react";

import BookListItem from '../book-list-item'
import {compose} from '../../utils'
import {connect} from 'react-redux'
import {withBookstoreService} from '../hoc'
import {booksLoaded,booksRequested} from '../../actions'
import '../book-list/book-list.css'
import Spinner from '../spinner/spinner'

class  BookList extends Component {
   
   componentDidMount(){
      //1. receive data
      const {bookstoreService, booksLoaded, booksRequested} = this.props;
     booksRequested();
      bookstoreService.getBooks()
     .then((data)=> booksLoaded(data));
    
     
      //2. dispacth action to store
      //this.props.booksLoaded(data);


   }
   
   render () {
      const {books,loading} = this.props
      if (loading) {
         return <Spinner/>
      }
      
      
      return (
         <ul className="book-list">
         {
           books.map((book) => {
             return (
               <li key={book.id}>
                 <BookListItem
                   book={book}
                   />
               </li>
             );
           })
         }
       </ul>

      )
   }
   
}

const mapStateToProps = ({books,loading}) => {
   return {books,loading};
}

const mapDispatchToProps = {
   booksLoaded,booksRequested
}
    


export default compose( withBookstoreService(),connect(mapStateToProps, mapDispatchToProps)
)(BookList);