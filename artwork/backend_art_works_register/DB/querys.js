const sequelize = require('./connectionDB');
const historicalContext = require('../models/historicalContext');
const technique = require('../models/technique');
const typeArtwork = require('../models/typeArtwork');
const location = require('../models/location');
const developmentSurface = require('../models/developmentSurface');

const result_query = async () => {
    const result = await sequelize.query("SELECT * FROM artwork");
    console.log("Resultado:", result);
};


const insertHistoricalContext = async (data) => {
    await historicalContext.create({
        context_name: data.context_name,
        description_context: data.description_context
    });
};

const insertTechnique = async (data) => {
    await technique.create({
        technique_name: data.technique_name,
        technique_description: data.technique_description
    });
};

const insertTypeArtwork = async (data) => {
    await typeArtwork.create({
        type_artwork: data.type_artwork,
        type_artwork_description: data.type_artwork_description
    });
};

const insertLocation = async (data) => {
    console.log("JSON: " + data);
    await location.create({
        country: data.country,
        department: data.department,
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude
    });
};

const insertDevelopmentSurface = async (data) => {
    await developmentSurface.create({
        surface_name: data.surface_name,
        surface_description: data.surface_description
    });
};

module.exports = {
    insertHistoricalContext,
    result_query,
    insertTechnique,
    insertTypeArtwork,
    insertLocation,
    insertDevelopmentSurface
};


