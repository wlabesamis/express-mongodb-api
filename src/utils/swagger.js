const swaggerJsDoc = require('swagger-jsdoc');
const PORT = process.env.PORT || 4000;

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
                url: `http://localhost:${PORT}/api`
            }
        ]
    },
    apis: ['./src/routes/*.js']
};

const specs = swaggerJsDoc(options);

module.exports = specs;
