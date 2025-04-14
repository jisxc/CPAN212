const express = require('express');
const { getAllKnits, createKnit } = require('../controllers/knit_controller');

const router = express.Router();

router.get('/', getAllKnits);
router.post('/', createKnit);

module.exports = router;
