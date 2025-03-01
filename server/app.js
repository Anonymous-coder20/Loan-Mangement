const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');
const userRouter = require('./routes/user.route');
const loanRouter = require('./routes/loan.route');
require('dotenv').config()
require('./database/connection');

const clientUrl = process.env.DEV_REACT_URL || "https://loan-management.netlify.app";
const app = express();

//Middleware
app.use(cookieParser());
app.use(cors({
    origin: clientUrl,
    credentials: true
    }));
app.use(helmet());
app.use(morgan('dev'))
app.use(express.json());

//Routes
app.use(userRouter);
app.use(loanRouter);

app.listen(process.env.PORT || 8000, () => {
    console.log("Listening on port 8000")
})
