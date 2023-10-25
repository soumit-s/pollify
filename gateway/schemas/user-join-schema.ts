import Joi from "joi";

export const UserJoinRequestSchema = Joi.object({
    email: Joi.string().email({minDomainSegments: 2}).required(),
    password: Joi.string().required(),
    confirm_password: Joi.string().required()
})