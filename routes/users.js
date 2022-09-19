const express = require('express');
const router = express.Router();
const User = require('../db');
// Getting all users
router.get('/users', async (req,res) => {
    const users = await User.find();
    res.send(users);
})

// Getting one user
router.get('/user/:id', (req,res) => {
    res.send(`the id u have is ${req.params.id}`)
})

// Adding an user
router.post('/users', (req,res) => {
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