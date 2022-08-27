const Books = require('../models/books.model'); 
module.exports.index = (request, response) => {
    response.json({
        message: "Hello World"
    });
}

module.exports.createBook = (request, response) => {
    Books.create(request.body)
        .then(books => response.json(books))
        .catch(err => response.json(err));
}

module.exports.getAllBooks = (request, response) => {
    Books.find({})
        .then(books => {
            console.log(books);
            response.json(books);
        })
        .catch(err => {
            console.log(err)
            response.json(err)
        })
}

module.exports.getBook = (request, response) => {
    console.log(request.params)
    Books.findOne({_id: request.params.id})
        .then(books => response.json(books))
        .catch(err => response.json(err))
}

module.exports.updateBooks = (request, response) => {
    Books.findOneAndUpdate({_id: request.params.id}, request.body, {new:true})
        .then(updatedBooks => response.json(updatedBooks))
        .catch(err => response.json(err))
}

module.exports.deleteBooks = (request, response) => {
    Books.deleteOne({ _id: request.params.id })
        .then(deleteConfirmation => response.json(deleteConfirmation))
        .catch(err => response.json(err))
}








