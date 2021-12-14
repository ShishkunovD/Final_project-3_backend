const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());
const apiRoutes = require("./src/modules/routes/routes");

const url = 'mongodb+srv://ShishkunovD:restart987!@cluster0.8tbt5.mongodb.net/Module-3_final_project?retryWrites=true&w=majority';
mongoose.connect(url);

app.use('/', apiRoutes);

app.listen('8000', () => {
  console.log('Server is running..');
})