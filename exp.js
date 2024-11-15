require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auditRouter = require('./routes/auditRouter');
const cors = require('cors');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

app.use('/audits', auditRouter);

 

app.listen(3000, () => console.log('Server Started'));