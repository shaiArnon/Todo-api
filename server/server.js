var mongoose = require('mongoose');

mongoose.Promise = global.Promise; // set mongoose to use promises
mongoose.connect('mongodb://localhost:27017/TodoApp');

var Todo = mongoose.model('Todo', {
    text: {
        type: String
    },
    completed: {
        type: Boolean

    },
    completedAt: {
        type: Number,
        min: [100, "wow, it\'s early dude!"],
        max: 10000
    }
});

var newTodo = new Todo({
    text: 'Cook dinner'
});

newTodo.save().then((doc) => {
    console.log('Saved todo', doc)
}, (e) => {
    console.log('Unable to save todo')
})

// the challenge:

var otherTodo = new Todo({
    text: 'Play soccer',
    completed: true,
    completedAt: 99
});

otherTodo.save().then((doc) => {
    console.log('Saved OTHER todo', JSON.stringify(doc, undefined, 2));
}, (e) => {
    console.log('Unable to save todo', JSON.stringify(e.errors.completedAt.message, undefined, 2));
})