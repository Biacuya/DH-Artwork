const express = require('express');
const router = express.Router();
const { insertTypeArtwork } = require('../DB/querys');

const insertTypeArtworkRoute = async (req, res) => {
    try {
        const data = req.body;
        await insertTypeArtwork(data);
        res.status(201).send("Todo fino");
    } catch (error) {
        res.status(500).send("Fallo: " + error.message);
    }
};

router.post('/addtype', insertTypeArtworkRoute);

module.exports = router;