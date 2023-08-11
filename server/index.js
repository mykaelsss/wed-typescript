const express = require('express');
const cors = require('cors');
const app = express();
require('dotenv').config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const connectDB = require('./config/connectMongo.config')

connectDB();

require('./routes/wedding.routes')(app);

const PORT = process.env.PORT

app.listen(PORT, () => {
    console.log("Server is running on port " + PORT)
})
