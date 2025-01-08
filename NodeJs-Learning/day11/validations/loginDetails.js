import Joi from 'joi';

const detailsValidation = {

  body: Joi.object().keys({

    name: Joi.string().min(3).required(),
    password: Joi.string().min(8).required(),
    address: Joi.string().min(3).required(),
     phone: Joi.number().min(10000000).required(),
     email: Joi.string().min(3).required()

  })
}

export {
  detailsValidation
}