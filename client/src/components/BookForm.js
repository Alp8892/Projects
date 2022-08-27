import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const BookForm = (props) => {
    const {books, setBooks} = props;
    const [bookTitle, setbookTitle] = useState(""); 
    const [bookAuthor, setbookAuthor] = useState("");
    const [genre, setGenre] = useState("")
    const navigate = useNavigate();
    
    const onSubmitHandler = (e) => {
        e.preventDefault();

        axios.post('http://localhost:8000/api/books', {
            bookTitle,    
            bookAuthor, 
            genre      
        })
            .then(res=>{
                navigate("/books");
                console.log(res);
                console.log(res.data);
                setBooks([...books, res.data]);
            })
            .catch(err=>console.log(err))
    }
    
    return (
        <form onSubmit={onSubmitHandler}>
            <h2>To Read</h2>
            <p>
                <label>Title: </label>
                <input type="text" onChange = {(e)=>setbookTitle(e.target.value)}/>
            </p>
            <p>
                <label>Author: </label>
                <input type="text" onChange = {(e)=>setbookAuthor(e.target.value)}/>
            </p>
            <p>
                <label>Genre: </label>
                <input type="text" onChange = {(e)=>setGenre(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
export default BookForm;

