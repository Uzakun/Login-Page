const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
const PatientssModel = require('./models/Patientss')

const app = express()
app.use(express.json())
app.use(cors())


mongoose.connect("mongodb://127.0.0.1:27017/Patientss")


app.post('/login', (req, res) => {
    const { email, password } = req.body;
    PatientssModel.findOne({ email: email })
        .then(user => {
            if (user) {
                if (user.password === password) {
                    res.json("Success")
                } else {
                    res.json("Incorrect Password")
                }
            } else {
                res.json("Email is not registered")
            }


        })

})
app.post('/register', (req, res) => {
    PatientssModel.create(req.body)
        .then(patients => res.json(patients))
        .catch(err => res.json(err))
})

app.listen(3001, () => {
    console.log("server is running")
})