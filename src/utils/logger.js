const { createLogger, format, transports } = require('winston');

require('winston-mongodb');
require('dotenv').config();

module.exports = createLogger({
    format: format.combine(
        format.simple(),
        format.errors({ stack: true }),
        format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        format.printf(info => `[${info.timestamp}] ${info.level}: ${info.message}`),
    ),
    transports: [
        new transports.File({
            maxsize: 5120000,
            maxFiles: 5,
            filename: `${__dirname}/../logs/log-api-psalm.log`
        }),
        new transports.Console({
            level: 'debug'
        }),
        new transports.MongoDB({
            level: 'debug',
            db: process.env.MONGO_CONNECTION,
            options: { useUnifiedTopology: true },
            collection: 'psalmLog',
            format: format.combine( 
                format.timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
                format.json() 
            )
        })
    ]
});