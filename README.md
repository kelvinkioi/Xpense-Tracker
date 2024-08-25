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
    ```
4. **Configuration**
    Database Connection: The MongoDB connection string is defined in the .env file and is used by the dbConnect function to connect to the database.
    JWT Secret: The JWT secret is used to sign and verify JSON Web Tokens for authentication.

## API Endpoints

### Users

* **Register a User**
  * Endpoint: `POST /api/users/register`
  * Description: Registers a new user.
  * Body: `{ email, firstname, lastname, password }`
* **Register as admin**
  * Endpoint: `POST /api/users/register`
  * Description: Registers a new user.
  * Body: `{ email, firstname, lastname, password, admin }`

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
  * Endpoint: `GET /api/income/all`
  * Description: Fetches all income records.
  * Only the admin can fetch all income records
* **Fetch All Income Records for a User**
  * Endpoint: `GET /api/expenses/`
  * Description: Fetches all income records for a registered User.
  * Request headers:
  
    | Header         | Value                     |
    |----------------|---------------------------|
    | Authorization  | Bearer `<token>`          |

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
  * Endpoint: `GET /api/expenses/all`
  * Description: Fetches all expense records.
  * Only the admin can fetch all expense records
  **Fetch All Expense Records for a User**
  * Endpoint: `GET /api/expenses/`
  * Description: Fetches all expense records for a registered User.
  * Request headers:

    | Header         | Value                     |
    |----------------|---------------------------|
    | Authorization  | Bearer `<token>`          |

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

### Get Net Balance

Retrieve the net balance for a user, which is calculated by subtracting total expenses from total income.

#### **Request**

- **Method:** `GET`
- **URL:** `/api/finance/netbalance`
- **Authentication:** Required

#### **Authentication**

This endpoint requires authentication. Ensure that the user is logged in and a valid token is included in the request headers.

#### **Request Headers**

| Header         | Value                     |
|----------------|---------------------------|
| Authorization  | Bearer `<token>`          |

#### **Response**

The response will return a JSON object containing the following fields:

| Field       | Type    | Description                                           |
|-------------|---------|-------------------------------------------------------|
| income      | Number  | Total income of the user.                            |
| expenses    | Number  | Total expenses of the user.                          |
| netBalance  | Number  | Net balance calculated as income - expenses.        |
| message     | String  | A fun message based on the net balance.              |

#### **Example Request**

    ```http
    GET /api/finance/net-balance HTTP/1.1
    Host: localhost:5000
    Authorization: Bearer your-token-here
    ```
## Scripts
  **Start the Server**
    ```bash 
    npm start
    ```
  **Watch for Changes (Development)**
    ```
    npm run watch
    ```

## Error Handling
The application includes custom middleware for handling errors and not found routes. The errorsMiddleware module provides two middleware functions:
        - notFoundHandler: Handles routes that are not found.
        - errorHandler: Handles all other errors.

## Contact
    kelvinkioi.101k@gmail.com
    https://github.com/kelvinkioi
