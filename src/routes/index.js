const express = require('express');
const countriesRouter = require('./countries.routes');
const routerUser = require('./user.routes');
const cityRouter = require('./city.routes');
const router = express.Router();

router.use("/api/v1", countriesRouter)

router.use("/api/v1/users", routerUser)

router.use("/api/v1/cities", cityRouter)


module.exports = router;