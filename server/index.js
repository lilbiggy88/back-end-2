const express = require('express');
const cors = require('cors');
const {getAllHouses, deleteHouse, createHouse, updateHouse} = require('./controller');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/api/houses', getAllHouses);
app.delete('/api/houses/:id', deleteHouse);
app.post('/api/houses', createHouse);
app.put('/api/houses/:id', updateHouse);

app.listen(4004, () => console.log('Server is running on 4004'));