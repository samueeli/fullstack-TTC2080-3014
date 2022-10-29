require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// cors - allow connection from different domains and ports
app.use(cors());

// convert json string to json object (from request)
app.use(express.json());

// mongo here...
const mongoose = require('mongoose');
const mongoDB = process.env.MONGO_URI;
mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
  console.log('Database test connected');
});

// Mongoose Scheema and Model here...
// scheema
const todoSchema = new mongoose.Schema({
  text: { type: String, required: true },
});

// model
const Todo = mongoose.model('Todo', todoSchema, 'todos');

// Routes here...
// Get all
app.get('/todos', async (request, response) => {
  const todos = await Todo.find({});
  response.json(todos);
});

// Get single
app.get('/todos/:id', async (request, response) => {
  const todo = await Todo.findById(request.params.id);
  if (todo) response.json(todo);
  else response.status(404).end();
});

// Create todo
app.post('/todos', async (request, response) => {
  const { text } = request.body;
  const todo = new Todo({
    text: text,
  });
  const savedTodo = await todo.save();
  response.json(savedTodo);
});

// Delete todo
app.delete('/todos/:id', async (request, response) => {
  const deletedTodo = await Todo.findByIdAndRemove(request.params.id);
  if (deletedTodo) response.json(deletedTodo);
  else response.status(404).end();
});

// Edit todo
app.put('/todos/:id', async (req, res) => {
  const todo = await Todo.findByIdAndUpdate(
    { _id: req.params.id },
    { text: req.body.text }
  );
  res.json(todo);
});

// app listen port 3000
app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
});
