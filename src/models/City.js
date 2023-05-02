const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Countries = require('./Countries');

const City = sequelize.define('city', {
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    area: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    is_capital: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
});

City.belongsTo(Countries)
Countries.hasMany(City)

module.exports = City;