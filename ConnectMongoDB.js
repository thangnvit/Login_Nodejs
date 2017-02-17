/**
 * Created by DEV on 2/16/2017.
 */

//lets require/import the mongodb native drivers.
var mongodb = require('mongodb');

//We need to work with "MongoClient" interface in order to connect to a mongodb server.
var MongoClient = mongodb.MongoClient;

// Connection URL. This is where your mongodb server is running.
var url = 'mongodb://localhost:27017/User';

// Use connect method to connect to the Server
MongoClient.connect(url, function (err, db) {
    if (err) {
        console.log('Unable to connect to the mongoDB server. Error:', err);
    }
    else
    {
        //HURRAY!! We are connected.
        console.log('Connection established to', url);

        // Get the documents collection
        var collection = db.collection('Department');

        // Find some state

        // collection.find({"user": "thang"}).toArray
        // (
        //
        //     function (err, result) {
        //         if (err) {
        //             console.log(err);
        //         } else if (result.length) {
        //             console.log(result);
        //             //var result=result.length;
        //
        //         } else {
        //             console.log('No document(s) found with defined "find" criteria!');
        //         }
        //         //Close connection
        //         db.close();
        //     }
        //
        // );
        collection.findOne({"user": "thang"},function (err,document) {
            console.log(document);
        })

    }
});