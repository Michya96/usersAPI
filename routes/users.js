const express = require('express');
const router = express.Router();
const {User} = require('../db');
const jwt = require("jsonwebtoken")

const token = jwt.sign("michya96", process.env.JWT_PRIVATE_KEY)

// Jwt authentication
function authenticateToken(req,res,next) {
    const token = req.header('auth-token')
    if(!token) return res.status(401).send('Access Denied')

    try{
        const verified = jwt.verify(token, process.env.JWT_PRIVATE_KEY,);
        next();
    } catch(err){
        res.status(400).send('Invalid token');
    }
}
// Getting all users
router.get('/users', authenticateToken, async (req,res) => {
    if (req.query.role) return res.status(200).send(await User.find({role: req.query.role}))
    const users = await User.find();
    res.send(users);
})

// Getting one user
router.get('/user/:id', authenticateToken, async (req,res) => {
    const user = await User.findOne({id:req.params.id})
    if (!user) return res.status(404).send("Couldn't find an user with given id")
    return res.status(200).send(user);
})

// Adding an user
router.post('/users', authenticateToken, async (req,res) => {
    const user = new User({
        id: 0,
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role
    })
    try{
        const result = await user.save();
        res.status(201).send(user);
    } catch(err) {
        res.status(400).send(err.message);
        
    }
    


    
})

// Updating existing user
router.patch('/user/:id', authenticateToken, async (req,res) => {
    const findUser = await User.findOne({id:req.params.id})
    if (!findUser) return res.status(404).send("Couldn't find an user with given id")
    const insertUser = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        role: req.body.role
    })
    try{
        const patchedUser = await User.updateOne({id:req.params.id}, {firstName: insertUser.firstName,lastName: insertUser.lastName,email:insertUser.email,role: insertUser.role})
        res.status(200).send(patchedUser);
    } catch(err) {
        res.status(400).send(err.message);
        
    }})

// Deleting existing user
router.delete('/user/:id', authenticateToken, async (req,res) => {
    const user = await User.findOne({id:req.params.id})
    if (!user) return res.status(404).send("Couldn't find an user with given id")
    try{
        const deletedUser = await User.deleteOne({id:req.params.id});
        res.status(200).send(deletedUser)
    } catch(err) {
        res.status(500).send(err.message);
    }
    
})

module.exports = router;