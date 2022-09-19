const express = require('express');
const router = express.Router();
const User = require('../index')
// Getting all users
router.get('/users', (req,res) => {
    res.send('Working')
})

// Getting one user
router.get('/user/:id', (req,res) => {
    res.send(`the id u have is ${req.params.id}`)
})

// Adding an user
router.post('/users', async (req,res) => {
    const users = await User.find();
    res.send(users);
})

// Updating existing user
router.patch('/user/:id', (req,res) => {
    res.send(`the id u have is ${req.params.id}`)
})

// Deleting existing user
router.delete('/user/:id', (req,res) => {
    res.send(`the id u have is ${req.params.id}`)
})


module.exports = router;