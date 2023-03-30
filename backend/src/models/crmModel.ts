import mongoose from 'mongoose';

const Schema = mongoose.Schema;

export const ContactSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    company: String,
    phone: String,
    notes: String,
    created_date: Date,
});