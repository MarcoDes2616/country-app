const { DataTypes } = require('sequelize');
const sequelize = require('../utils/connection');
const Countries = require('./Countries');

const User = sequelize.define('user', {
    username: {
        type: DataTypes.STRING,
        allowNull: false
    },
});

User.belongsTo(Countries)
Countries.hasMany(User)

module.exports = User;