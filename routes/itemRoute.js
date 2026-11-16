const express = require('express');
const router = express.Router();
const itemController = require('./itemController');

router.get('/JobApplications', itemController.getItems); //Get
router.get('/JobApplications/:id', itemController.getItemById); //Get
router.post('/JobApplications', itemController.createItem); //Create
router.put('/JobApplications/:id', itemController.updateItem); //Update
router.delete('/JobApplications/:id', itemController.deleteItem); //Delete

module.exports = router;