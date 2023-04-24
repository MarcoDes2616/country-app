const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');

const Countries = sequelize.define('countries', {
    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    languaje: {
        type: DataTypes.STRING(30),
        allowNull: false
    },
    currency: {
        type: DataTypes.STRING(20),
        allowNull: false
    },
    flagUrl: {
        type: DataTypes.TEXT,
        allowNull: false
    },
});

module.exports = Countries;