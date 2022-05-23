const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080


app.use(cors());
app.use(express.json());
app.listen(PORT, () => console.log("Servidor iniciado"));

require('./src/routes')(app);