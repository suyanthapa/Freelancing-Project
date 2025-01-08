import { Router } from "express";
import { getMetadata, updateMetadata } from "../models/libraryMetadata.js";
import { update } from "../validations/metadata.js";
import { addBook, books } from "../models/books.js";
import { booksValidation } from "../validations/books.js";
import mongoose from "mongoose";
import validate from "../middlewares/validate.js";



const bookRouter = Router();

//get metadata
bookRouter.get("/books", async function(req,res){

  try{  
    const metadata =( await getMetadata()).toObject();
    const books1 = await books.find({});

    return res.json({date: new Date().toISOString(),...metadata, books:books1 , _id: undefined, __v: undefined})

  }
  catch(e){
    return res.status(400).json({Error: e.message})
  }
})
//edit metadata
bookRouter.put("/metadata",validate(update),async function (req,res) {

  try{
  
    let { source, updatedBy} = req.body;
    let latest = await updateMetadata({source,updatedBy});
    let id = latest._id;
    let v = latest.__v;
    return res.json({metadata: latest, _id: undefined, __v: undefined})
  }
  catch (e){
    return res.status(400).json({Error: e.message})
  }
  
})

//add new boook
bookRouter.post("/books",validate(booksValidation.add) ,async function(req,res) {
    try{
      // const metadata =( await getMetadata()).toObject();
      console.log(req.body);
      const { title,author,genre,publishedYear,rating} = req.body;
      const add = await books.create(req.body);
      return res.json({books:add})
    }
    catch (e) {
      console.error("Error adding book:", e);
      return res.status(400).json({ error: e.message });
    }
})

const specificRouter = Router();

bookRouter.use("/:bookId", validate(booksValidation.validateSingle), async function (req,res,next) {


    try{
      const  current = req.params.bookId;
      let exisiting = await books.findOne({_id:new mongoose.Types.ObjectId(current)})

      if(exisiting){
        req.exisiting = exisiting;
        next()
      } else 
      {
        throw new Error ("book not found by id:"+ current)
      }
    }
    catch (e){
      return res.status(400).json({error: e.message})
    }
}, specificRouter)

specificRouter.get("/", async function (req,res) {

  return res.send({books : req.exisiting})
  
})

specificRouter.put("/", validate(booksValidation.add) ,async function (req,res){
  try{
    const { title, genre, rating, publishedYear, author} =req.body;
    req.exisiting.title = title;
    req.exisiting.author = author;
    req.exisiting.publishedYear = publishedYear;
    req.exisiting.rating = rating;
    req.exisiting.genre = genre;
  
    await req.exisiting.save();
    console.log(req.exisiting)
    return res.json({message: "Book updated successfully", books : req.exisiting} )
    
  }
  catch (e){
    return res.json({error: e.message})
  }
})


specificRouter.delete("/", async function (req,res){
  try{
  await req.exisiting.deleteOne();
    return res.json({message: "Book deleted successfully"} )
    
  }
  catch (e){
    return res.json({error: e.message})
  }
})

export {bookRouter }

