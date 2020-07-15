const express = require('express');
const { Router } = require('express');
const router = express.Router();

router.get('/', function(req,res){
    res.send('api-works');
});

module.exports = router;