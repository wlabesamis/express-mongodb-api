const swaggerJsDoc = require('swagger-jsdoc');
const PORT = process.env.API_PORT || 8080;
const API_ENDPOINT = process.env.API_ENDPOINT || `http://localhost:${PORT}/api`

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Express MongoDB API',
            version: '1.0.0',
            description: 'A simple Express MongoDB API'
        },
        servers: [
            {
                url: `${API_ENDPOINT}`
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

const specs = swaggerJsDoc(options);

module.exports = specs;
