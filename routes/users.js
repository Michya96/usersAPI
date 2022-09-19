const express = require('express');
const router = express.Router();

// Getting all users
router.get('/users', (req,res) => {
    res.send('Working')
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