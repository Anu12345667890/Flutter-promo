NodeJS App Setup
npm packages used:
• bcrypt
• body-parser
• express
• jsonwebtoken
• mongoose
• nodemon

The Code Follows:
index.js -> app.js -> router -> controller -> service

db.js
This file establishes the MongoDB database connection. It's imported in models, ensuring automatic connection when models are used for CRUD operations.

models:
Models define database schemas. Mongoose is used to create schemas for user and promo code collections.

user.model.js - 
User schema stores user email and encrypted passwords using bcrypt before storing data in the user collection.

promo.model.js - 
The promo schema stores promo code details, including the code itself and associated attributes.

routes - 
user.routes.js -
Handles user registration and login events, allowing users to create accounts and sign in using corresponding APIs.

promo.routes.js -
Manages promo code generation and validation events, enabling users to create and utilize promo codes.

controller -
Controllers handle request and response. They receive parameters from the frontend (Flutter app) and respond with requested data from the backend.

user.controller.js -
Contains functions for user registration and login. The register function creates a user account.

promo.controller.js -
Includes functions for promo code generation and validation.

services -
Services handle database operations like fetching, insertion, and deletion. They encapsulate the business logic of the application.

Overall, the application setup encompasses backend functionalities for user authentication and promo code generation, ensuring secure and efficient operations.
