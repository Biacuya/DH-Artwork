const { DataTypes } = require('sequelize');
const sequelize = require('../DB/connectionDB');

function typeArtwork() {
    return sequelize.define('typeArtwork', {
        id_type_artwork: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        type_artwork: DataTypes.STRING,
        type_artwork_description: DataTypes.STRING
    }, {
        tableName: 'type_artwork',
        timestamps: false
    });
};

module.exports = typeArtwork();