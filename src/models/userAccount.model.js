import {Schema, model} from 'mongoose';

const AccountSchema = new Schema({
    login: {
        type: String,
        required: true,
        unique: true
    },
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
        default: ['USER']
    },
},
{
        versionKey: false
});

export default model('Account', AccountSchema, 'users');