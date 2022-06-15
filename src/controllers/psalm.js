const { request, response } = require('express');
const { Psalm } = require('../models');
const { ObjectId } = require('mongoose').Types;
const { songs, logger } = require('../helpers');

const psalmsGet = async(req = request, res = response) => {

    try {

        logger.info('Get list of psalms');
        logger.info('Execution of psalmsGet');

        const { from = 0, limit = 5 } = req.query;
        const query = { state: true };
    
        const [totalRows, psalms] = await Promise.all([
            Psalm.countDocuments(),
            Psalm.find().skip(from).limit(limit)
        ]);
    
        res.json({
            totalRows,
            psalms
        });

    } catch (error) {
        logger.error('Can not get list of psalms');
        logger.error(error);
        res.status(400).send('Something broke!');
    }
}

const psalmPost = async(req = request, res = response) => {

    try {
        
        logger.info('Create a psalm');
        logger.info('Execution of psalmPost');

        const { name } = req.body;
        const psalm = new Psalm({ name });
        
        const esMongoId = ObjectId.isValid( name );
        if ( esMongoId ) {
            const psalm = await Psalm.findById(name);
            return res.json({
                results: ( psalm ) ? [ psalm ] : []
            })
        }
        
        const regex = new RegExp( name, 'i' );
    
        const psalms = await Psalm.find({
            $or: [ 
                { name: regex },  
            ]
        });
    
        if (psalms.length != 0) {
            return res.json({
                msg: 'Psalm already exists'
            });
        }
    
        await psalm.save();
      
        res.json({
            msg: 'Psalm saved'
        });
    
        // // for save all psalms
        // await Psalm.insertMany(songs);
    
        // res.json({
        //     msg: 'Psalms saved'
        // });        

    } catch (error) {
        logger.error('Can not create a psalm');
        logger.error(error);
        res.status(400).send('Something broke!');
    }    

}

module.exports = {
    psalmsGet,
    psalmPost,
}
