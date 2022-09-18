import React, { Component } from "react";

import BookListItem from "../book-list-item";
import { compose } from "../../utils";
import { connect } from "react-redux";
import { withBookstoreService } from "../hoc";
import { booksLoaded, booksRequested, booksError } from "../../actions";
import "../book-list/book-list.css";
import Spinner from "../spinner/spinner";
import ErrorIndicator from "../error-indicator/error-indicator";

class BookList extends Component {
  componentDidMount() {
   this.props.fetchBooks();
    //1. receive data
   // const { bookstoreService, booksLoaded, booksRequested, booksError } =
   //   this.props;
   // booksRequested();
   // bookstoreService.getBooks()
   // .then((data) => booksLoaded(data))
   // .catch((err)=> booksError(err))

    //2. dispacth action to store
    //this.props.booksLoaded(data);
  }

  render() {
    const { books, loading, error } = this.props;
    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator/> ;
    }

    return (
      <ul className="book-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, ownProps) => {
   const {bookstoreService} = ownProps;
   return{

      fetchBooks: () => {
         dispatch(booksRequested());
    bookstoreService.getBooks()
    .then((data) => dispatch(booksLoaded(data))
    .catch((err)=> dispatch(booksError(err))))
      }
   }
//  booksLoaded,
//  booksRequested,
//  booksError,
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);
