const { Router } = require('express');
const { 
    celebrationsGet,
    celebrationPost,
} = require('../controllers')

const router = Router();

// create ceclebration
/**
 * @swagger
 * components:
 *  schemas:
 *      Celebrations:
 *          type: object
 *          properties:
 *              name:
 *                  type: string
 *                  description: name of the celbration
 *                  required: True
 *              state:
 *                  type: string
 *                  description: state of the celbration
 *              required:
 *                  - name
 *                  - state
 *              example:
 *                  name: Dayenu
 *                  state: True
 */
router.get('/', celebrationsGet);
router.post('/', celebrationPost);

module.exports = router;