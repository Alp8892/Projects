import React, {useEffect} from 'react'
import {Link} from 'react-router-dom';
import axios from 'axios';

const BookList = (props) => {
    const {id, removeFromDom, books, setBooks} = props;
    
    const deleteBooks = (bookId) => {
        axios.delete('http://localhost:8000/api/books/' + bookId)
        .then(res => {
            removeFromDom(bookId)
        })
        .catch(err => console.log(err))
    }
    
    useEffect(()=>{
    	axios.get('http://localhost:8000/api/books/')
    	.then((res)=>{
	    console.log(res.data);
            setBooks(res.data);
	})
    	.catch((err)=>{
            console.log(err);
    	})
    }, [])
    
    return (
        <div className='wholeList'>
            {
                books.map((books, index)=>{
                    return(
                        <div>
                                <div className='list' key={index}>
                                    <p>Title: {books.bookTitle}</p>
                                    <p>Author: {books.bookAuthor}</p>
                                    <p>Genre: {books.genre}</p>

                                    <button><Link to={`/books/${books._id}`}>
                                        {books.bookTitle}'s Page!
                                    </Link></button><br />

                                    <button><Link to={`/books/edit/${books._id}`}>
                                        Update
                                    </Link></button>
                                    |
                                    <button onClick={(e)=>{deleteBooks(books._id)}}>
                                        Completed
                                    </button>
                                </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default BookList;

