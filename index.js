const express = require('express');
const Joi = require('joi');
const users = require('./routes/users')
const port = process.env.PORT || 3000;
app = express();

app.use(express.json());
app.use('/api', users);
app.listen(port, (req,res) => console.log(`server started on port ${port}`))