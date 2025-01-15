/**
 * Sample usage:
 * validate({
 *   body: Joi.object({ key: Joi.string().required() }),
 *   params: Joi.object({ id: Joi.number().required() }),
 *   query: Joi.object({ search: Joi.string() }),
 *   headers: Joi.object({ authorization: Joi.string().required() }).unknown()
 * })
 */

const validate = function (validationSchemas = {}) {
    return function (req, res, next) {
        const { body, params, query, headers } = validationSchemas;

        const errors = [];

        if (body) {
            const validationResult = body.validate(req.body, { abortEarly: false });
            if (validationResult.error) {
                errors.push({ location: 'body', message: validationResult.error.message });
            }
        }

        if (params) {
            const validationResult = params.validate(req.params, { abortEarly: false });
            if (validationResult.error) {
                errors.push({ location: 'params', message: validationResult.error.message });
            }
        }

        if (query) {
            const validationResult = query.validate(req.query, { abortEarly: false });
            if (validationResult.error) {
                errors.push({ location: 'query', message: validationResult.error.message });
            }
        }

        if (headers) {
            const validationResult = headers.validate(req.headers, { abortEarly: false });
            if (validationResult.error) {
                errors.push({ location: 'headers', message: validationResult.error.message });
            }
        }

        if (errors.length > 0) {
            return res.status(400).send({ errors });
        }

        return next();
    };
};

export default validate;
