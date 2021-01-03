const mongoose = require("mongoose");

module.exports = () => {
    mongoose.connect("mongodb+srv://kaan:kaankarakas336@cbotproject.yibay.mongodb.net/cbot?retryWrites=true&w=majority", {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    });
    mongoose.connection.on('open', () => {
        console.log('MongoDB: Connected');
    });

    mongoose.connection.on('error', (err) => {
        console.log('MongoDB: Error', err);
    });
};