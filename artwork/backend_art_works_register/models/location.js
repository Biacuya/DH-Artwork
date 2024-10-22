const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connectionDB');

function location() {
    return sequelize.define('location', {
        id_location: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        country: DataTypes.STRING,
        department: DataTypes.STRING,
        city: DataTypes.STRING,
        latitude: DataTypes.DECIMAL,
        longitude: DataTypes.DECIMAL
    }, {
        tableName: 'location',
        timestamps: false
    });
};

module.exports = location();