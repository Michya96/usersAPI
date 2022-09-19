const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URI)

const userSchema = new mongoose.Schema({
    id: Number,
    firstName: String,
    lastName: String,
    email: String,
    role: String
})

module.exports = mongoose.model('User', userSchema);