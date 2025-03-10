const express = require('express');
const app = express();
const mongoose = require('mongoose');
const auditRouter = require('./routes/auditRouter');
const locationsRouter = require('./routes/locationRouter');
const userRouter = require('./routes/userRouter');
const photoRouter = require('./routes/photoRouter');
const cors = require('cors');
const passport = require('passport');
const config = require('./config.js');

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));

app.use(express.json());
app.use(cors());

app.use(passport.initialize());


app.use('/audits', auditRouter);
app.use('/locations', locationsRouter);
app.use('/users', userRouter);
app.use('/photos', photoRouter);
 
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Our app is running on port ${ PORT }`);
});
