const express = require('express');
const bodyParser = require('body-parser');
const { connectDB } = require('./database/mongo')
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

connectDB()

module.exports = app;
