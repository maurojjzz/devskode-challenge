import Joi from "joi";

const foodSchema = Joi.object({
    name: Joi.string().max(20).min(3).required().messages({
        'string.min': 'At least 3 characters long.',
        'string.max': 'Cannot exceed 20 characters.',
        'any.required': 'Field is required.',
        'string.empty': 'Cannot be empty.'
      }),
    description: Joi.string().min(3).max(50).required().messages({
        'string.min': 'At least 3 characters long.',
        'string.max': 'Cannot exceed 50 characters.',
        'any.required': 'Field is required.'
      }),
    price: Joi.number().positive().max(100000000).required().messages({
        'number.base': 'Must be a number.',
        'number.positive': 'Must be a positive number.',
        'number.max': 'Cannot exceed 100,000,000.',
        'any.required': 'Field is required.',
        'string.empty': 'Cannot be empty.'
      }),
    stock: Joi.boolean().required().messages({
        'any.required': 'Field is required.',
        'string.empty': 'Cannot be empty.'
      }),
    rating: Joi.number().required().messages({
        'number.base': 'Rating must be a number.',
        'any.required': 'Field is required.',
        'string.empty': 'Cannot be empty.'
      }),
    image: Joi.string().required().messages({
        'any.required': 'Field is required.',
        'string.empty': 'Cannot be empty.'
      }),
});

export default foodSchema;