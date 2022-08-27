import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useParams} from "react-router-dom";

const Detail = (props) => {
    const [books, setBooks] = useState({})
    const {id} = useParams(); 

    useEffect(() => {
        axios.get("http://localhost:8000/api/books/" + id)
            .then( res => {
                console.log(res.data);
                setBooks(res.data);
            })
            .catch( err => console.log(err) )
    }, [])
    return (
        <div>
            <p>Title: {books.bookTitle}</p>
            <p>Author: {books.bookAuthor}</p>
            <p>Genre: {books.genre}</p>
        </div>
    )
}
export default Detail;

