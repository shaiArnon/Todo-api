//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');


    // db.collection('Todos').findOneAndUpdate({
    //     _id: new ObjectID('590de788f34674740a5557b0')
    // }, {
    //     $set: {
    //         completed: true

    //     }
    // }, {
    //     returnOriginal: false
    // }).then((result) => {
    //     console.log('success:\n', result)
    // })

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('590b88174b6631092940cb33')
    }, {
        $set: {
            name: "TheNewName"
        },
        $inc: {
            age: -1
        }
    }, {
        returnOriginal: false
    }).then((result) => {
        console.log('Success!:\n', result)
    })

    //  db.close();


});