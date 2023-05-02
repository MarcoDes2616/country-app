const catchError = require('../utils/catchError');
const Countries = require('../models/Countries');
const User = require('../models/User');
const City = require('../models/City');

const getAll = catchError(async(req, res) => {
    const results = await Countries.findAll({include: [User, City]});
    return res.json(results);
});

const create = catchError(async(req, res) => {
    const result = await Countries.create(req.body);
    return res.status(201).json(result);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Countries.findByPk(id, {include: [User, City]});
    if(!result) return res.sendStatus(404);
    return res.json(result);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Countries.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const result = await Countries.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(result[0] === 0) return res.sendStatus(404);
    return res.json(result[1][0]);
});

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update
}