const { Router } = require('express');
const { 
    celebrationsGet,
    celebrationPost,
} = require('../controllers')

const router = Router();

router.get('/', celebrationsGet);
router.post('/', celebrationPost);

module.exports = router;