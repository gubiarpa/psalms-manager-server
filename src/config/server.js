const express = require('express');

require('dotenv').config();

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.pathList = {
            testPath : '/api/test',
        }

        this.routes();
    }

    routes() {
        this.app.use(this.pathList.testPath, require('../routes/tests'));
    }

    listen() {
      this.app.listen(this.port, () => {
          console.log(`Server running on port ${ this.port }`);
      });  
    }
}

module.exports = Server;