const express = require('express');
const router = express.Router();
const itemController = require('./itemController');

router.get('/items', itemController.getItems); //Get
router.get('/items/:id', itemController.getItemById); //Get
router.post('/items', itemController.createItem); //Create
router.put('/items/:id', itemController.updateItem); //Update
router.delete('/items/:id', itemController.deleteItem); //Delete

module.exports = router;