const mongoose = require('mongoose');
const { logger } = require('../helpers');

const dbConnection = async() => {
    try {
        await mongoose.connect(process.env.MONGO_CONNECTION);
        logger.info('Connected to database');
    } catch (error) {
        logger.error(error);
        throw new Error('Error launching database');
    }
}

module.exports = {
    dbConnection
}