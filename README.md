# Lab 2 - SQLite Database and CRUD Routes

## Project Description

This project is a Book Management REST API developed using Node.js, Express.js, and SQLite.

It performs CRUD operations (Create, Read, Update, Delete) to manage book records in an SQLite database.

## Technologies Used

- Node.js
- Express.js
- SQLite
- SQLite3
- Nodemon
- Postman
- Render

## Project Structure

```text
Lab-2/
│
├── app.js
├── bookstore.db
├── package.json
├── package-lock.json
├── README.md
├── .gitignore
│
└── screenshots/
    ├── get-all-books.png
    ├── get-book-by-id.png
    ├── post-book.png
    ├── put-book.png
    └── delete-book.png
```

## Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/gopularamarchitha-ui/Lab-2.git
```

### 2. Navigate to the project folder

```bash
cd Lab-2
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

### 5. Open the application

```text
http://localhost:3000/
```

## Database Details

**Database Name:** bookstore.db

**Table Name:** book

### Table Structure

| Column | Data Type |
|---|---|
| id | INTEGER PRIMARY KEY |
| title | TEXT |
| author | TEXT |
| price | INTEGER |
| pages | INTEGER |

The database contains 8 initial sample book records.

## API Endpoints

| HTTP Method | Endpoint | Description |
|---|---|---|
| GET | `/books/` | Get all books |
| GET | `/books/:bookId/` | Get a book by ID |
| POST | `/books/` | Add a new book |
| PUT | `/books/:bookId/` | Update an existing book |
| DELETE | `/books/:bookId/` | Delete a book |

## API Testing

All API endpoints were tested using Postman.

The following operations were successfully tested:

1. GET - Retrieve all books.
2. GET - Retrieve a single book using its ID.
3. POST - Add a new book.
4. PUT - Update an existing book.
5. DELETE - Delete a book.

Postman screenshots are available in the `screenshots/` folder.

## SQL Injection Prevention

Parameterized SQL queries using `?` placeholders are used to prevent SQL injection.

## Deployment

The application is deployed using Render.

**Live Application URL:**

https://lab-2-1-ij9f.onrender.com

## GitHub Repository

https://github.com/gopularamarchitha-ui/Lab-2

## .gitignore

The following files and folders are excluded from Git:

- node_modules/
- .env

## Conclusion

This project demonstrates the implementation of a REST API using Express.js and SQLite. All five API endpoints were implemented and tested successfully using Postman. The application was also deployed using Render.
