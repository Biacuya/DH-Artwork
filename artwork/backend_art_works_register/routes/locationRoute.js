const express = require('express');
const router = express.Router();
const { insertLocation } = require('../DB/querys');

const insertLocationRoute = async (req, res) => {
    try {
        const data = req.body;
        await insertLocation(data);
        res.status(201).send("Todo fino");
    } catch (error) {
        res.status(500).send("Fallo: " + error.message)

    }
};

router.post('/addlocation', insertLocationRoute);

module.exports = router;