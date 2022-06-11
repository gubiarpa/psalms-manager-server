const { Router } = require('express');
const { 
    psalmGet,
    psalmPost,
} = require('../controllers')

const router = Router();

router.get('/', psalmGet);
router.post('/', psalmPost);

module.exports = router;