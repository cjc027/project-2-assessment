const Todos = require('../models/todo');

module.exports = {
    index,
    create,
    delete: deleteTodo
}

function index(req, res){
    console.log('Index <--')
    res.render('index', {
        todos: Todos.todos,
        title: 'To Do List'
    })
}

function create(req, res){
    console.log('create <--', req.body)
    // todo.id = Date.now() % 100000000;
    let todo = req.body;
    todo.id = todo.id = Date.now() % 100000000;
    todo.done = false;

    Todos.todos.push(todo);
    res.redirect('/');
}

function deleteTodo(req, res){
    console.log('deleteTodo <--')
    const idx = Todos.todos.findIndex(todo => todo.id === parseInt(req.params.id));

    Todos.todos.splice(idx, 1);
    res.redirect('/');
}

