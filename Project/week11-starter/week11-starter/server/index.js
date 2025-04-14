require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const knitRouter = require('./routes/knit_router');
const userRouter = require('./routes/user_router');

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/knits', knitRouter);
app.use('/api/users', userRouter);

// ✅ Test route
app.get('/', (req, res) => {
  res.send('Server is up and running!');
});

const PORT = process.env.PORT || 8000;
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('MongoDB connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((error) => console.log(error));
