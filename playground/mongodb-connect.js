//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');

var user = { name: "Shai", age: 25 };
var { name } = user;
console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // db.collection('Users').insertOne({
    //     name: 'Shai',
    //     age: 25,
    //     location: 'Haifa'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Couldn\'t insert the user');
    //     }
    //     console.log(result.ops[0]._id.getTimestamp());
    // });

    db.close();
});