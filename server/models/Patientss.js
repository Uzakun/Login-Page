const mongoose = require('mongoose')

const PatientssSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    repeatPassword: String

})

const PatientssModel = mongoose.model("Patients", PatientssSchema)
module.exports = PatientssModel