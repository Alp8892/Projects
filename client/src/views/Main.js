import React, { useState } from 'react'
import axios from 'axios';
import BookForm from '../components/BookForm';
import BookList from '../components/BookList';
import '../App.css'
import background1 from "../book_background.jpg";
import background2 from "../library.jpg";
const Main = () => {
    
    const [books, setBooks] = useState([]);
    const removeFromDom = booksId => {
        setBooks(books.filter(books => books._id != booksId));
    }
    
    return (
        <div className='wholePage' style={{backgroundImage: `url(${background2})`}}>
            <nav>
                <p className='logo'>Personal Library</p>
            </nav>
            <br /><br />
            <div className='mainContent'style={{backgroundImage: `url(${background1})`}}>
                <div className='bookForm'>
                <BookForm books={books} setBooks={setBooks} />
                </div>
                    <hr/>
                <div className='bookList' >
                <BookList books={books} setBooks={setBooks}
                removeFromDom={removeFromDom} />
                </div>
            </div>
        </div>
    )
}
export default Main;
