const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

//middleware
app.use(express.json())
app.use(express.urlencoded({extended: false}))


//routes
app.use('/api/products', productRoute)


app.get('/', (req,res) => {
    res.send("hello from node api")
});

mongoose.connect("mongodb+srv://pradipsinha37:nHKb9Roc1Gm92Upz@backenddb.ov96gt5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=backendDB")
.then(() => {
    console.log("Connected to database")
    app.listen(3000, () => {
        console.log("Server is running on port 3000")
    });
})
.catch(() => {
    console.log("connection failed")
})