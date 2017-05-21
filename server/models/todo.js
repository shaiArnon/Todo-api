var mongoose = require('mongoose');

var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        munlength: 1,
        trim: true

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
module.exports = { Todo };