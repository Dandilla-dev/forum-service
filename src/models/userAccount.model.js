
import {Schema, model} from 'mongoose';
import {USER, MODERATOR, ADMIN} from "../configuration/constants.js";

const userAccountSchema = new Schema({

        _id: {
            type: String,
            required: true,
            alias: 'login'
        },
        // login: {
        //     type: String,
        //     required: true,
        //     unique: true
        // },
        password: {
            type: String,
            required: true
        },
        firstName: {
            type: String,
            required: true
        },
        lastName: {
            type: String,
            required: true
        },
        roles: {
            type: [String],
            enum: [USER, MODERATOR, ADMIN],
            default: [USER]
        },
    },
    {
        versionKey: false
    });

export default model('UserAccount', userAccountSchema, 'users');