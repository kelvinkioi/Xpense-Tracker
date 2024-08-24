# Xpense Tracker - Backend

Welcome to the Xpense Tracker backend! 🎉 This backend system is designed to help users manage their finances by tracking their income and expenses. It is built with Node.js, Express, and MongoDB to provide a robust API for handling user management and financial records.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Configuration](#configuration)
- [API Endpoints](#api-endpoints)
  - [Users](#users)
  - [Income](#income)
  - [Expenses](#expenses)
- [Scripts](#scripts)
- [Error Handling](#error-handling)
- [Contact](#contact)

## Features

- **User Management**: Register, login, and fetch users.
- **Income Tracking**: Create, read, update, and delete income records.
- **Expense Tracking**: Create, read, update, and delete expense records.
- **Authentication**: Secure routes using JSON Web Tokens (JWT).
- **Database**: MongoDB with Mongoose for data management.

## Installation

To get started with the Xpense Tracker backend, follow these steps:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/kelvinkioi/Xpense-Tracker.git
   cd Xpense-Tracker

2. **Install Dependencies**
    Navigate to the src/server directory and install the dependencies:
    ```bash
    cd src/server
    npm install

3. **Setup Environment Variables**
    Create a .env file in the src/server directory and add your MongoDB connection string and JWT secret:
    ```bash
    MONGO_URL=your_mongodb_connection_string
    JWT_SECRET=your_jwt_secret

4. **Configuration**
    Database Connection: The MongoDB connection string is defined in the .env file and is used by the dbConnect function to connect to the database.
    JWT Secret: The JWT secret is used to sign and verify JSON Web Tokens for authentication.

## API Endpoints

### Users

* **Register a User**
  * Endpoint: `POST /api/users/register`
  * Description: Registers a new user.
  * Body: `{ email, firstname, lastname, password }`
* **Login a User**
  * Endpoint: `POST /api/users/login`
  * Description: Logs in a user and returns a JWT.
  * Body: `{ email, password }`
* **Fetch Users**
  * Endpoint: `GET /api/users`
  * Description: Fetches all registered users.

### Income

* **Create Income Record**
  * Endpoint: `POST /api/income`
  * Description: Creates a new income record.
  * Body: `{ amount, description, date }`
* **Fetch All Income Records**
  * Endpoint: `GET /api/income`
  * Description: Fetches all income records.
* **Fetch Single Income Record**
  * Endpoint: `GET /api/income/:id`
  * Description: Fetches a single income record by ID.
* **Update Income Record**
  * Endpoint: `PUT /api/income/:id`
  * Description: Updates an income record by ID.
  * Body: `{ amount, description, date }`
* **Delete Income Record**
  * Endpoint: `DELETE /api/income/:id`
  * Description: Deletes an income record by ID.

### Expenses

* **Create Expense Record**
  * Endpoint: `POST /api/expenses`
  * Description: Creates a new expense record.
  * Body: `{ amount, description, date }`
* **Fetch All Expense Records**
  * Endpoint: `GET /api/expenses`
  * Description: Fetches all expense records.
* **Fetch Single Expense Record**
  * Endpoint: `GET /api/expenses/:id`
  * Description: Fetches a single expense record by ID.
* **Update Expense Record**
  * Endpoint: `PUT /api/expenses/:id`
  * Description: Updates an expense record by ID.
  * Body: `{ amount, description, date }`
* **Delete Expense Record**
  * Endpoint: `DELETE /api/expenses/:id`
  * Description: Deletes an expense record by ID.

## Scripts
    Start the Server
    ```bash
    npm start
    ```
    Watch for Changes (Development)
    ```bash
    npm run watch

## Error Handling
    The application includes custom middleware for handling errors and not found routes. The errorsMiddleware module provides two middleware functions:
        - notFoundHandler: Handles routes that are not found.
        - errorHandler: Handles all other errors.

## Contact
    kelvinkioi.101k@gmail.com
    https://github.com/kelvinkioi
