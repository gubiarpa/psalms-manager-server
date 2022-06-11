const { request, response } = require('express');
const { Celebration } = require('../models');
const { ObjectId } = require('mongoose').Types;
const { celebrations } = require('../uploads/list')

const celebrationsGet = async(req = request, res = response) => {
    const { from = 0, limit = 5 } = req.query;
    const query = { state: true };

    const [totalRows, celebrations] = await Promise.all([
        Celebration.countDocuments(),
        Celebration.find(query).skip(from).limit(limit)
    ]);

    res.json({
        totalRows,
        celebrations
    });
}

const celebrationPost = async(req = request, res = response) => {

    // const { name } = req.body;
    // const celebration = new Celebration({ name });
    
    // const esMongoId = ObjectId.isValid( name );
    // if ( esMongoId ) {
    //     const celebration = await Celebration.findById(name);
    //     return res.json({
    //         results: ( celebration ) ? [ celebration ] : []
    //     })
    // }
    
    // const regex = new RegExp( name, 'i' );

    // const celebrations = await Celebration.find({
    //     $or: [ 
    //         { name: regex },  
    //     ]
    // });

    // if (celebrations.length != 0) {
    //     return res.json({
    //         msg: 'Celebration already exists'
    //     });
    // }

    // await celebration.save();
  
    // res.json({
    //     msg: 'Celebration saved'
    // });



    // for save all celebrations
    await Celebration.insertMany(celebrations);

    res.json({
        msg: 'Celebrations saved'
    });         

}

module.exports = {
    celebrationsGet,
    celebrationPost,
}
