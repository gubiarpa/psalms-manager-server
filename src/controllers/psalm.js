const { request, response } = require('express');
const { Psalm } = require('../models');
const { ObjectId } = require('mongoose').Types;
const { songs } = require('../uploads/list')

const psalmsGet = async(req = request, res = response) => {
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
}

const psalmPost = async(req = request, res = response) => {

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

}

module.exports = {
    psalmsGet,
    psalmPost,
}
