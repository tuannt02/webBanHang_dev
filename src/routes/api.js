const express = require('express');
const router = express.Router();

const apiController = require('../app/controllers/ApiController');

router.get('/login', apiController.getBanner);

router.get('/daily_discover', apiController.show);




router.get('/banner', apiController.getBanner);




router.get('/category', apiController.getCategory);

module.exports = router;