import Joi from 'joi';

const booksValidation = {
add: {

  body: Joi.object().keys({

    author: Joi.string().min(3).required(),
    title : Joi.string().min(3).required(),
    genre: Joi.string().min(3).required(),
    publishedYear: Joi.number().min(4).required(),
    rating: Joi.number().required(),

  })},
  validateSingle:{

    params: Joi.object().keys({ bookId: Joi.string().length(24).required(), })
}
}
export { booksValidation} 