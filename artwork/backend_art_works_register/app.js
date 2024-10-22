const express = require('express');
const app = express()
const historicalContext = require('./routes/historicalContextRoute');
const technique = require('./routes/techniqueRoute');
const typeArtwork = require('./routes/typeArtworkRoute');
const location = require('./routes/locationRoute');
const developmentSurface = require('./routes/developmentSurfaceRoute');


app.use(express.json());

app.use('/api/historical', historicalContext);
app.use('/technique', technique);
app.use('/typeartwork', typeArtwork);
app.use('/location', location);
app.use('/devsurface', developmentSurface);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`)
})