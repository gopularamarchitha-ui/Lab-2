# Lab 2 - SQLite Database and CRUD Routes

## Project Description
This project is a Book Management API built using Node.js, Express.js, and SQLite.

## Technologies Used
- Node.js
- Express.js
- SQLite
- SQLite3
- Postman
- Nodemon

## Installation

1. Clone or download the project.
2. Open the project folder in VS Code.
3. Install dependencies:

   `npm install`

4. Start the server:

   `npm run dev`

The server runs at `http://localhost:3000/`.

## API Endpoints

| Method | Endpoint | Description |
|---|---|---|
| GET | /books/ | Get all books |
| GET | /books/:bookId/ | Get a book by ID |
| POST | /books/ | Add a new book |
| PUT | /books/:bookId/ | Update a book |
| DELETE | /books/:bookId/ | Delete a book |

## Database
Database name: `bookstore.db`

Table name: `book`

Columns:
- id
- title
- author
- price
- pages

## Testing
All CRUD routes were tested using Postman.

## Deployment
Not deployed yet.