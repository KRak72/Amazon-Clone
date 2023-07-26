

const {onRequest} = require("firebase-functions/v2/https");
const logger = require("firebase-functions/logger");

const express = require('express')
const cors = require('cors')

const stripe = require('stripe')('sk_test_51NIp5PSJNml4MJ9sAAiJujiZlvPzQEwD7i8kIYYQoNF5VSN2kQ8S0fhbJ71vPaSjhS2J2rW8Uc8XgBICglVPgxxG004ItVLH9w')

// App config
const app = express();

// Middleware
app.use(cors({origin: true}));
app.use(express.json());

// Api Routes
app.get('/',(req,res) => res.status(200).send('Hello world'));

// Listen Command
exports.api = functions.https.onRequest(app)