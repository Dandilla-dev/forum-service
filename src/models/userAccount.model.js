import {Schema, model} from 'mongoose';

const userAccountSchema = new Schema({
    _id: {
        type: String,
        required: true,
        alias: 'login'
    }
    // TODO Create userAccountSchema for Mongoose
});

export default model('UserAccount', userAccountSchema, users);