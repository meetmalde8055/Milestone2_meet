const express = require('express');
const controller = require('../../controllers/trade_controller/tradeController')
const router = express.Router();

//Get / trades/ send all trades to new user

router.get('/', controller.index);

//send form for creating a new trade
router.get('/new', controller.new);

//Post : create a new trade

router.post('/', controller.create);

// send details of trade identified by id
router.get('/:id', controller.show);

// send html to edit trades
router.get('/:id/edit', controller.edit);


//PUT update the trade identified
router.put('/:id',  controller.update);

//Delete  the story
router.delete('/:id', controller.delete);

module.exports = router;