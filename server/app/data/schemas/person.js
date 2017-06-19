const mongoose = require('mongoose');

const personSchema = mongoose.Schema({
    personalNumber: String,
    firstName: String,
    lastName: String,
    email: String,
    orgPath: String,
    birthDate: Date,
    enrollmentDate: Date,
    releaseDate: Date,
    voip: String,
    phoneNumber: String
});

const Person = mongoose.model('Person', personSchema);