const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const db = require("./config/db");
db();
const app = express();

const userRouter = require("./routes/userRouter")

app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use("/auth", userRouter)


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})
