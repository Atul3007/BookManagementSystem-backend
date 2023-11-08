const mongoose=require("mongoose");

const bookSchema=mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    author:{
        type:String,
        lowercase:true
    },
    summary:{
        type:String,
        lowercase:true
    }
})

const bookModel=mongoose.model("books",bookSchema);

module.exports={bookModel}

