import Joi from "joi";

const commentSchema = {
    post: Joi.string().required(),
    content: Joi.string().min(2).max(256).required(),
};

export default commentSchema;