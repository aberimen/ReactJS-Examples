import React, { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';

const Book = ({ book }) => {
    const { isDark, light, dark } = useContext(ThemeContext);
    const theme = isDark ? dark : light;

    return (
        <div className="col-md-4 col-lg-4 col-sm-6">
            <div className="card mr-4 mb-4" style={{ background: theme.contentBg, color: theme.text }}>
                <img className="img-fluid" src={book.image} alt="Book cover" />
                <div className="card-body">
                    <h5 className="card-title">{book.title}</h5>
                    <p className="card-text"><small className="text-muted">{book.author}</small></p>
                </div>
            </div>
        </div>

    );
};

export default Book;