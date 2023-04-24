const { getAll, create, getOne, remove, update } = require('../controllers/countries.controllers');
const express = require('express');

const countriesRouter = express.Router();

countriesRouter.route('/')
    .get(getAll)
    .post(create);

countriesRouter.route('/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

module.exports = countriesRouter;