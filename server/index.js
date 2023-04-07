const express = require('express')
const app = express()
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const RegisterModel = require('./models/registerdb')

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//////DATABASE CONNECTION

mongoose.connect("mongodb://127.0.0.1/schoolbookDB", {useNewUrlParser: true})

app.post("/userinfos", async (req, res) => {
    const name = req.body.name;
    const school = req.body.school;
    const nicky = req.body.nicky;
    const email = req.body.email;
    const password = req.body.password;

    const userinfos = new RegisterModel ({
        name: name,
        school: school,
        nicky: nicky,
        email: email,
        password: password
    });

    await userinfos.save();
    res.send("Successful")
})



app.listen(3001, ()=>{
    console.log("Server started on port 3001")
})