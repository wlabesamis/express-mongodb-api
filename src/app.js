const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const swaggerUi = require('swagger-ui-express');
const swaggerSpecs = require('./utils/swagger');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./middlewares/errorHandler');

require('dotenv').config();

const app = express();

app.use(bodyParser.json());

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpecs));
app.use('/api', userRoutes);
app.use(errorHandler);

mongoose.connect(process.env.MONGO_URI, {
    autoIndex: false,
    dbName: process.env.DB_NAME,
    user: process.env.DB_USER,
    pass: process.env.DB_PASS
}).then(() => {
    console.log('Connected to MongoDB');
}).catch(err => {
    console.error('Error connecting to MongoDB', err);
});

module.exports = app;
