const { Router, request, response } = require('express');

const router = Router();

router.get('/', (req, res = response) => {
    res.json('Hola');
});



module.exports = router;