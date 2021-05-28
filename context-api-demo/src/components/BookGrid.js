import React from 'react';
import { BookContext } from '../context/BookContext';
import Book from './Book';

const BookGrid = () => {

    return (
        <div className="row">
            <BookContext.Consumer>
                {({ books }) => (books.map(book =>
                    <Book book={book} key={book.ISBN} />
                ))}
            </BookContext.Consumer>

        </div>
    );
};

export default BookGrid;