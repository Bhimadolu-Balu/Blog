const Book = require("../model/Book");

const getAllBooks = async(req,res,next)=>{
   let books;
   try{
    books = await Book.find();
   }.catch(err){
    console.log(err);
   }
   if(!books){
    return res.status(404).json({message:"NO product found"});
   }
   return res.status(202).json({books}); 
}

const getById = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
       book = await Book.findById(id);
    }.catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"No Book found"});
    }
    return res.status(202).json({book});
}

const addBook = async(req,res,next)=>{
    const{name,author,description,price,available,image} = req.body;
    let book;
    try{
        book = new Book({
            name,author,description,price,avaliable,image
        });
        await book.save();
    }.catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(500).json({message:"Unable to add"});
    }
    return res.status(201).jsonj({book});
}

const updateBook = async(req,res,next) => {
    cosnt id=req.params.id;
    const {name,author,description,price,available,image}=req.body;
    let book;
    try{
        book=await Book.findByIdAndUpdate(id,{
            name,author,description,price,available,image,
        });
        book = await book.save();
    }.catch(err)=>{
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"unable to update"});
    }
    return res.status(201).json({book});
)

const deleteBook = async(req,res,next)=>{
    const id = req.params.id;
    let book;
    try{
       book = await Book.findByIdAndDelete(id);
    }.catch(err){
        console.log(err);
    }
    if(!book){
        return res.status(404).json({message:"unable to delete the book"});
    }

    return res.status(202).json({message:"sucessfully deleted"});
}
