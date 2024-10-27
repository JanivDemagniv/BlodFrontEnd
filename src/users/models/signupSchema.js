import Joi from "joi";

const signupSchema = {
    username: Joi.string().min(2).max(256).required(),
    email: Joi.string()
        .ruleset.regex(/^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/)
        .rule({ message: 'user "mail" must be a valid mail' })
        .required(),
    password: Joi.string()
        .ruleset.regex(
            /((?=.*\d{1})(?=.*[A-Z]{1})(?=.*[a-z]{1})(?=.*[!@#$%^&*-]{1}).{7,20})/
        )
        .rule({
            message:
                'user "password" must be at least nine characters long and contain an uppercase letter, a lowercase letter, a number and one of the following characters !@#$%^&*-',
        })
        .required(),
    first: Joi.string().min(2).max(256).required(),
    middle: Joi.string().min(2).max(256).allow(""),
    last: Joi.string().min(2).max(256).required(),
    imageUrl: Joi.string()
        .ruleset.regex(
            /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/
        )
        .rule({ message: "user image must be a valid url" })
        .allow(""),
    imageAlt: Joi.string().min(2).max(256).allow(""),
};

export default signupSchema;