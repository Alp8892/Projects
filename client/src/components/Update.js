import React, { useEffect, useState } from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
const Update = (props) => {
    const { id } = useParams();
    const [bookTitle, setBookTitle] = useState();
    const [bookAuthor, setBookAuthor] = useState();
    const [genre, setGenre] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8000/api/books/' + id)
            .then(res => {
                console.log('===my data', res.data)
                setBookTitle(res.data.bookTitle);
                setBookAuthor(res.data.bookAuthor);
                setGenre(res.data.genre);
            })
            .catch(err => console.log(err))
    }, [])
    const updateBooks = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/books/' + id, {
            bookTitle,  
            bookAuthor,
            genre      
        })
            .then(res => {
                console.log(res);
                navigate("/books"); 
            })
            .catch(err => console.log(err))
    }
    console.log('my book title', bookTitle)
    return (
        <div>
            <h1>Update a Book</h1>
            <form onSubmit={updateBooks}>
                <p>
                    <label>Title</label><br />
                    <input type="text" 
                    name="bookTitle" 
                    value={bookTitle} 
                    onChange={(e) => { setBookTitle(e.target.value) }} />
                </p>
                <p>
                    <label>Author</label><br />
                    <input type="text" 
                    name="bookAuthor"
                    value={bookAuthor} 
                    onChange={(e) => { setBookAuthor(e.target.value) }} />
                </p>
                <p>
                    <label>Genre</label><br />
                    <input type="text" 
                    name="genre"
                    value={genre} 
                    onChange={(e) => { setGenre(e.target.value) }} />
                </p>
                <input type="submit" />
            </form>
        </div>
    )
}
export default Update;

