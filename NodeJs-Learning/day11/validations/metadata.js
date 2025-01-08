import Joi from 'joi'


const update = {
  body: Joi.object().keys({
    source : Joi.string().min(3).required(),
    updatedBy: Joi.string().min(3).required(),
  })
}

export { update}