const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connectionDB');

function developmentSurface() {
    return sequelize.define('developmentsurface', {
        id_development: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        surface_name: DataTypes.STRING,
        surface_description: DataTypes.STRING

    }, {
        tableName: 'development_surface',
        timestamps: false
    });
};


module.exports = developmentSurface();