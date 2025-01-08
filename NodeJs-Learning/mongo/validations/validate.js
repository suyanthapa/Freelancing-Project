import Joi from 'joi';

const Schema =  Joi.object().keys({

  name: Joi.string().min(3).required(),
  manufacturer: Joi.string().min(3).required(),
  price : Joi.number().min(0).required(),
  makeYear : Joi.date(),

})

const schema2 = Joi.number().required()

export {Schema ,schema2}