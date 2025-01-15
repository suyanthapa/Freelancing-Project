import Joi from 'joi';

const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default{
  
  register:
    {
      body: Joi.object().keys({
        username: Joi.string().min(3).required(),
        email:  Joi.string().pattern(emailPattern).required(),
        password: Joi.string().min(8).required()
      })
    },

    login:
      {
        email: Joi.string().pattern(emailPattern).required(),
        password: Joi.string().min(8).required()
      }
}



