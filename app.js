console.log("MY LAB 2 APP IS RUNNING");
const express = require("express");
const { open } = require("sqlite");
const sqlite3 = require("sqlite3");
const path = require("path");

const app = express();
app.use(express.json());

const dbPath = path.join(__dirname, "bookstore.db");

let db = null;

const initializeDBAndServer = async () => {
  try {
    db = await open({
      filename: dbPath,
      driver: sqlite3.Database,
    });

    const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server Running on port ${PORT}`);
});
  } catch (error) {
    console.log(`DB Error: ${error.message}`);
    process.exit(1);
  }
};
app.get("/", (request, response) => {
  response.send("Welcome to Lab 2 - SQLite CRUD API");
});
// Get all books
app.get("/books/", async (request, response) => {
  const books = await db.all("SELECT * FROM book");
  response.send(books);
});
// Get a single book by ID
app.get("/books/:bookId/", async (request, response) => {
  const { bookId } = request.params;

  const book = await db.get(
    "SELECT * FROM book WHERE id = ?",
    [bookId]
  );

  if (book === undefined) {
    response.status(404).send("Book Not Found");
  } else {
    response.send(book);
  }
});
// Add a new book
app.post("/books/", async (request, response) => {
  const { title, author, price, pages } = request.body;

  const query = `
    INSERT INTO book (title, author, price, pages)
    VALUES (?, ?, ?, ?);
  `;

  await db.run(query, [title, author, price, pages]);

  response.status(201).send("Book Added Successfully");
});
// Update a book
app.put("/books/:bookId/", async (request, response) => {
  console.log("PUT route reached", request.params.bookId);
  const { bookId } = request.params;
  const { title, author, price, pages } = request.body;

  const query = `
    UPDATE book
    SET title = ?, author = ?, price = ?, pages = ?
    WHERE id = ?;
  `;

  const result = await db.run(query, [
    title,
    author,
    price,
    pages,
    bookId,
  ]);

  if (result.changes === 0) {
    response.status(404).send("Book Not Found");
  } else {
    response.send("Book Updated Successfully");
  }
});
// Delete a book
app.delete("/books/:bookId/", async (request, response) => {
  console.log("DELETE ROUTE REACHED");
  const { bookId } = request.params;

  const result = await db.run(
    "DELETE FROM book WHERE id = ?",
    [bookId]
  );

  if (result.changes === 0) {
    response.status(404).send("Book Not Found");
  } else {
    response.send("Book Deleted Successfully");
  }
});
initializeDBAndServer();
