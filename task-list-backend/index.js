const config = require('./config');
const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');

const port = config.PORT || 3000; //by default, port is 3000 unless specified is .env
//port should be changed to not 3000 so as to not interfere with frontend

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());


mongoose.connect(config.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB database'));


app.get('/', (req, res) => res.send('Task List backend'));

// routes
app.use('/api/tasks', require('./routes/tasks'));

app.listen(port, async () => {
  console.log(`Starting server on port ${port}`);
}); 