//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');


MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to mongoDB server');

    // deleteMany
    // db.collection('Todos').deleteMany({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // })

    // deleteOne
    // db.collection('Todos').deleteOne({
    //     text: 'Eat lunch'
    // }).then((result) => {
    //     console.log(result)
    // });

    // findOneAndDelete
    // db.collection('Todos').findOneAndDelete({
    //     completed: false
    // }).then((result) => {
    //     console.log('sucsess!\n', result);
    // }, (err) => {
    //     console.log('ouch, an error');
    // })

    //  db.close();

    //
    db.collection('Users').findOneAndDelete({
        _id: new ObjectID('590b873f889f3c0919280b57')
    }).then((result) => {
        console.log('Success!, the user details:\n', result);
    }, (err) => {
        console.log('an error /:', err)
    })
});