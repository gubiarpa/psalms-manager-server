const express = require('express');
const { dbConnection } = require('../database/config');

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathList = {
            pathTest :          '/api/test',
            pathCelebration :   '/api/celebration',
            pathpsalm :         '/api/psalm',
        }

        this.connectDB();
        this.middlewares()
        this.routes();
    }

    async connectDB() {
        await dbConnection();
    }

    middlewares() {
        this.app.use(express.json())
    }

    routes() {
        this.app.use(this.pathList.pathTest, require('../routes/tests'));
        this.app.use(this.pathList.pathCelebration, require('../routes/celebration'));
        this.app.use(this.pathList.pathpsalm, require('../routes/psalm'));
    }

    listen() {
      this.app.listen(this.port, () => {
          console.log(`Server running on port ${ this.port }`);
      });  
    }
}

module.exports = Server;