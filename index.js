require("dotenv").config();
const express = require('express');
const { use } = require("./routes/users");
const users = require('./routes/users')
const port = process.env.PORT || 3000;
const cors = require('cors');
app = express();

app.use(express.json());

app.use(cors({
    origin: "127.0.0.1:5500",
}))
app.use('/api', users);
app.listen(port, (req,res) => console.log(`server started on port ${port}`))
