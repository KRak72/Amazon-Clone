

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require('express')
const cors = require('cors')

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// Api Routes
app.get('/',(req,res) => res.status(200).send('Hello world'));

// Listen Command
exports.api = functions.https.onRequest(app)