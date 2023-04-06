const express = require('express')
const cors = require('cors')
const RegisterModel = require('./models/mongo')

const app = express()

app.use(cors)
app.use(express.json())

//////DATABASE CONNECTION

mongoose.connect("mongodb://localhost:27017/schoolbookDB", {useNewUrlParser: true})
// .then(() => {
//     console.log("mongodb connected")
// })
// .catch(() => {
//     console.log("failed")
// })



app.listen(3001, ()=>{
    console.log("Server started on port 3001")
})