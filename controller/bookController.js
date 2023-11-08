const { bookModel } = require("../models/bookModel");

// --------get all books-------

const getbookController = async (req, res) => {
  try {
    const books = await bookModel.find({});
    res.status(200).send({
      success: true,
      books,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in getting product",
    });
  }
};

// --------create book-------

const createBook = async (req, res) => {
  try {
    const { title, author, summary } = req.body;

    if (!title || !author || !summary) {
      return res.status(400).send({
        message: "all fields required",
      });
    }
    const book =await new bookModel({ ...req.body });
    await book.save();

    res.status(201).json({
      success: true,
      message: "Book created successfully",
      book,
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in creating book",
    });
  }
};

//   ----------search by id -------------

const getBookByid = async (req, res) => {
  try {
    const id = req.params.id;
   // console.log(id);
    const book = await bookModel.findById(id);
    if (book) {
      return res.status(201).send({
        success: true,
        book
      });
    } else {
      console.log("error");
    }
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in getting book",
    });
  }
};

// -----------update book-----------

const updateBook = async (req, res) => {
  try {
    const id = req.params.id;
    const { title, author, summary } = req.body;

    if (!title || !author || !summary) {
      return res.status(400).send({
        message: "all fields required",
      });
    }
    const book = await bookModel.findByIdAndUpdate(id, {
      ...req.body,
    });
    await book.save();

    const updatedList =await bookModel.find({});

    res.status(201).json({
      success: true,
      message: "Book updated successfully",
      updatedList
    });
  } catch (error) {
    res.status(400).send({
      success: false,
      error: error.message,
      message: "Error in updating book",
    });
  }
};

// ---------delete book---------
const deleteBook = async (req, res) => {
    try {
      const id = req.params.id;
      const deleteBook = await bookModel
        .findByIdAndDelete(id);
      res.status(200).send({ 
        success: true,
        message: "Book deleted successfully",
      });
    } catch (error) {
      res.status(400).send({
        success: false,
        error: error.message,
        message: "Error in deleting book",
      });
    }
  };
  

module.exports = {
  getbookController,
  createBook,
  getBookByid,
  updateBook,
  deleteBook
};
