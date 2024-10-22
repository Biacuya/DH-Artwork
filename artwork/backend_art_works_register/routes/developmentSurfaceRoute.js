const express = require('express');
const router = express.Router();
const { insertDevelopmentSurface } = require('../DB/querys');

const insertDevelopmentSurfaceRoute = async (req, res) => {
    try {
        const data = req.body
        await insertDevelopmentSurface(data);
        res.status(201).send("Todo fino");
    } catch (error) {
        res.status(500).send("Fallo: " + error.message);
    }
};

router.post('/adddevsurface', insertDevelopmentSurfaceRoute);

module.exports = router;