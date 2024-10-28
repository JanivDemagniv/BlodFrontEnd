import Joi from "joi";

const postSchema = {
    title: Joi.string().min(2).max(256).required(),
    subtitle: Joi.string().min(2).max(256).required(),
    artist: Joi.string().min(2).max(256).required(),
    album: Joi.string().min(2).max(256).required(),
    content: Joi.string().min(256).max(5000).required(),
    imageUrl: Joi.string()
        .ruleset.regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        )
        .rule({ message: "user image must be a valid url" })
        .required(),
    imageAlt: Joi.string().min(2).max(256).allow(""),
};

export default postSchema;