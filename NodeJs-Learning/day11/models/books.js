import { model, Schema } from "mongoose";

const bookSchema = new Schema ({

  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  publishedYear: {
    type: Number,
    required: true,
  },
  genre: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  }

},{timestamps: true})


const books =  model("books", bookSchema)


async function addBook({title,author,genre,rating,publishedYear}) {
  return books.create({title,author,genre,rating,publishedYear})
  
}

export {books, addBook}