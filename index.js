require("dotenv").config();
const express = require('express');
const Joi = require('joi');
const users = require('./routes/users')
const port = process.env.PORT || 3000;
app = express();

app.use(express.json());
app.use('/api', users);
app.listen(port, (req,res) => console.log(`server started on port ${port}`))

// Connecting to db
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)
// app.get('/', async (req,res) => {
// })

const userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    role: String
})

const User = mongoose.model('User', userSchema);

async function createUser() {
    const user = new User({
        id: 0,
        firstName: 'Michal',
        lastName: 'Jankiewicz',
        email: 'michja144@gmail.com',
        role: 'user'
    })
    
    const result = await user.save();
    console.log(result)
}



async function getUsers() {
    const users = await User.find()
    console.log(users);
}
getUsers();

// module.exports = User;