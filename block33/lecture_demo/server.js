// import express
const express = require('express');
const cors = require('cors')
const app = express();
const PORT = 3000;

// middleware
app.use(express.json()); // parse json data
app.use(express.urlencoded({ extended: false })); // parse url encoded data
app.use(cors()) // allow cross origin resource sharing
app.use(express.static('public')); // serve static files

// db connection
const client = require('./db/client');
client.connect();

const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('./db/students');

app.use('/students', require('./api'));

// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})