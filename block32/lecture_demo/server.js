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

const students = [
  {
    id: 1,
    name: 'John Doe'
  },
  {
    id: 2,
    name: 'Jane Doe'
  },
  {
    id: 3,
    name: 'John Smith'
  },
  {
    id: 4,
    name: 'Jane Smith'
  },
]

// routes
app.get('/students', (req, res) => { // callback request, response in parameter
  res.send(students)
})
// route with a route parameter
app.get('/students/:id', (req, res) => {
  const student = students.find(student => student.id === parseInt(req.params.id))
  res.send(student)
})

// app.get('/home', (req, res) => {
//   res.sendFile(__dirname + '/index.html')
// })

app.post('/students', (req, res) => {
  const student = {
    id: students.length + 1,
    name: req.body.name
  }
  students.push(student)
  res.send(student)
})

app.put('/students/:id', (req, res) => {
  const student = students.find(student => student.id === parseInt(req.params.id))
  student.name = req.body.name
  res.send(student)
})

app.delete('/students/:id', (req, res) => {
  const student = students.find(student => student.id === parseInt(req.params.id))
  const index = students.indexOf(student)
  students.splice(index, 1)
  res.send(student)
})
// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})