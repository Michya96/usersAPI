const mongoose = require('mongoose');
const AutoIncrement = require('mongoose-sequence')(mongoose);
mongoose.connect(process.env.MONGODB_URI)

// Creating user schema for database
const userSchema = new mongoose.Schema({
    firstName: {type:String, maxlength:50},
    lastName: {type:String, maxlength:50},
    email: {type:String, required: true, unique:true},
    role: {type:String, required: true, enum:['admin','user']}
})

// Implementing auto incrementing id
userSchema.plugin(AutoIncrement, {inc_field: 'id'})


module.exports.User = mongoose.model('User', userSchema);

