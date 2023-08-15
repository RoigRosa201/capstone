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
// routes
app.get('/students', async (req, res) => { // callback request, response in parameter
  const students = await getStudents();
  res.send(students);
})
// route with a route parameter
app.get('/students/:id', async (req, res) => {
  const student = await getStudentById(req.params.id);
  res.send(student)
})

app.post('/students', async (req, res) => {
  const newStudent = await createStudent(req.body.name); // passing it in the request body
  res.send(newStudent)
})

app.put('/students/:id', async (req, res) => {
  const updatedStudent = await updateStudent(req.params.id, req.body.name);
  res.send(updatedStudent)
})

app.delete('/students/:id', async (req, res) => {
  const deletedStudent = await deleteStudent(req.params.id);
  res.send(deletedStudent)
})
// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})