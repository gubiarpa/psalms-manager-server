const mongoose = require('mongoose');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        console.log('Connected to database');
    } catch (error) {
        console.error(error);
        throw new Error('Error launching database');
    }
}

module.exports = {
    dbConnection
}