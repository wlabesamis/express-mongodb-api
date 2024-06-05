# Express MongoDB API

This project is a simple Express.js API with MongoDB integration. It includes Swagger documentation, error handling, validation, and unit tests using Jest.

## Prerequisites

- Node.js
- MongoDB

## Installation

1. Clone the repository:
> git clone https://github.com/your-username/express-mongodb-api.git
> cd express-mongodb-api

2. Install the dependencies:
> npm install

3. Create a .env file in the root directory with the following content:
> MONGO_URI=mongodb://localhost:27017/express-mongodb-api
> PORT=4000

4. Running the Application
To start the application, use:  
> npm start

The API will be available at http://localhost:3000.

## API Documentation
Swagger documentation is available at http://localhost:3000/api-docs.

## Running the Tests
To run the unit tests, use:
> npm test


Project Structure

```
express-mongodb-api/
├── src/
│   ├── controllers/
│   │   └── userController.js
│   ├── models/
│   │   └── userModel.js
│   ├── routes/
│   │   └── userRoutes.js
│   ├── services/
│   │   └── userService.js
│   ├── middlewares/
│   │   └── errorHandler.js
│   ├── utils/
│   │   └── swagger.js
│   ├── validations/
│   │   └── userValidation.js
│   ├── app.js
│   ├── server.js
├── tests/
│   └── user.test.js
├── .env
├── jest.config.js
├── package.json
└── README.md
```