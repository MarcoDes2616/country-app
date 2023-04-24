const catchError = require('../utils/catchError');
const User = require('../models/User');

const getAll = catchError(async(req, res) => {
    return res.json(/* valor a retornar */)
});

module.exports = {
    getAll
}