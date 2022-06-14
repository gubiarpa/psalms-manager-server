const { request, response } = require('express');
const { Celebration } = require('../models');
const { ObjectId } = require('mongoose').Types;
const { celebrations } = require('../uploads/list')
const logger = require('../utils/logger');

const celebrationsGet = async(req = request, res = response) => {

    try {

        logger.info('Get list of celebrations');
        logger.info('Execution of celebrationsGet');

        const { from = 0, limit = 5 } = req.query;
        const query = { state: true };
        
        const [totalRows, celebrations] = await Promise.all([
            Celebration.countDocuments(),
            Celebration.find(query).skip(from).limit(limit)
        ]);
        
        res.json({
            totalRows,
            celebrations,
        });

    } catch (error) {
        logger.error('Can not get list of celebrations');
        logger.error(error);
        res.status(400).send('Something broke!');
    }
}

const celebrationPost = async(req = request, res = response) => {

    try {

        logger.info('Create a celebration');
        logger.info('Execution of celebrationPost');
        
        const { name } = req.body;
        const celebration = new Celebration({ name });
        
        const esMongoId = ObjectId.isValid( name );
        if ( esMongoId ) {
            const celebration = await Celebration.findById(name);
            return res.json({
                results: ( celebration ) ? [ celebration ] : []
            })
        }
        
        const regex = new RegExp( name, 'i' );
    
        const celebrations = await Celebration.find({
            $or: [ 
                { name: regex },  
            ]
        });
    
        if (celebrations.length != 0) {
            return res.json({
                msg: 'Celebration already exists'
            });
        }
    
        await celebration.save();
      
        res.json({
            msg: 'Celebration saved'
        });
    
        // // for save all celebrations
        // await Celebration.insertMany(celebrations);
    
        // res.json({
        //     msg: 'Celebrations saved'
        // });         

    } catch (error) {
        logger.error('Can not create a celebration');
        logger.error(error);
        res.status(400).send('Something broke!');
    }


}

module.exports = {
    celebrationsGet,
    celebrationPost,
}
