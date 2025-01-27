// Importing the required dependencies
import express from 'express' ;

// const express = require('express');


const app = express();

// Middleware to parse JSON
app.use(express.json());

// Define PORT
const PORT = 3000;

// Routes for 'products'
app.get('/products', (req, res) => {
  res.json({ message: "This is the GET product path" });
});

app.post('/products', (req, res) => {
  res.json({ message: "This is the POST product path and something was added" });
});

app.put('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PUT product path and product ${id} was updated` });
});

app.patch('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PATCH product path and product ${id} was partially updated` });
});

app.delete('/products/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the DELETE product path and product ${id} was deleted` });
});

// Routes for 'users'
app.get('/users', (req, res) => {
  res.json({ message: "This is the GET user path" });
});

app.post('/users', (req, res) => {
  res.json({ message: "This is the POST user path and a new user was added" });
});

app.put('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PUT user path and user ${id} was updated` });
});

app.patch('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the PATCH user path and user ${id} was partially updated` });
});

app.delete('/users/:id', (req, res) => {
  const { id } = req.params;
  res.json({ message: `This is the DELETE user path and user ${id} was deleted` });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

