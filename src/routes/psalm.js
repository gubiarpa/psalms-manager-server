const { Router } = require('express');
const { 
    psalmsGet,
    psalmPost,
} = require('../controllers')

const router = Router();

router.get('/', psalmsGet);
router.post('/', psalmPost);

module.exports = router;