const express = require('express');
const countriesRouter = require('./countries.routes');
const router = express.Router();

router.use("/api/v1", countriesRouter)


module.exports = router;