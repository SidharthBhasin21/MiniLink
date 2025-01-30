const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv').config();
const cors = require("cors");
const PORT = process.env.PORT || 3000;
const db = require("./config/db");
db();
const app = express();
const device = require('express-device');

const userRouter = require("./routes/userRouter")
const urlRouter = require("./routes/urlRouter")

app.use(cors({
    origin: ['http://localhost:5173', 'https://mini-link-gilt.vercel.app'],
    credentials: true,
}));
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({extended: true}));
app.use(device.capture());

app.get('/', (req, res) => {
    res.json({
        message: 'Hello World'
    });
});

app.use("/auth", userRouter)
app.use("/url", urlRouter)


app.listen(PORT, () => {
    console.log('Server is running on port', PORT);
})
