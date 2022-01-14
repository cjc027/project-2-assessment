const Todos = require('../models/todo');

module.exports = {
    index,
    create,
    delete: deleteTodo
}

function index(req, res){
    console.log('Index <--')
    res.render('index', {
        todos: Todos
    })
}

function create(req, res){
    console.log('create <--')
}

function deleteTodo(req, res){
    console.log('deleteTodo <--')
}

