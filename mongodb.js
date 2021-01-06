const express = require('express');
const app = express();
const port = 5000;

const Mongoose = require('mongoose');
Mongoose.connect('mongodb+srv://dikang:1016@cluster0.qfe5p.mongodb.net/MyTripApp?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('mongo...'))
.catch(e => console.log(e));

app.get('/', (req, res) => res.send("dfsdfsd"));
app.listen(port, () => console.log('listen'));