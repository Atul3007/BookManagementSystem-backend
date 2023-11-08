const express=require("express");
const { getbookController, createBook, getBookByid, updateBook, deleteBook } = require("../controller/bookController");

const bookrouter=express.Router();

bookrouter.get("/all-books",getbookController);
bookrouter.post("/create-book",createBook);
bookrouter.get("/book-id/:id",getBookByid);
bookrouter.put("/update-book/:id",updateBook)
bookrouter.delete("/delete/:id",deleteBook)

module.exports={
    bookrouter
}