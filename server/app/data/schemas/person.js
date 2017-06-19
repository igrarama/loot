const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    id: mongoose.Schema.Types.ObjectId,
    personalNumber: String,
    firstName: String,
    lastName: String,
    email: String,
    birthDate: Date,
    enrollmentDate: Date,
    releaseDate: Date,
    voip: String,
    phoneNumber: String
});

const Person = mongoose.model('Person', personSchema);