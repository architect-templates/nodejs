const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config()

const todoController = require('./controller/todo.controller')

const app = express();
const port = process.env.PORT || 3000;

app.set('port', port);
app.use(express.static(__dirname + '/public'));
app.set('views', __dirname + '/public');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.get('/', (_, res) => {
  res.render('index.html');
});

app.get('/api/todos', (_, res) => {
  todoController.getTodos().then(data => res.json(data));
});

app.post('/api/todo', (req, res) => {
  todoController.createTodo(req.body.todo).then(data => res.json(data));
});

app.put('/api/todo', (req, res) => {
  todoController.updateTodo(req.body.todo).then(data => res.json(data));
});

app.delete('/api/todo/:id', (req, res) => {
  todoController.deleteTodo(req.params.id).then(data => res.json(data));
});

app.listen(port, () => {
  console.log(`> Listening on port ${port}`);
})
