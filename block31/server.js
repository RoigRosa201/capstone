// import express
const express = require('express');
const app = express();
const PORT = 3000;

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
  if (req.query.length) {
    const subset = students.slice(0, parseInt(req.query.length))
    res.send(subset)
  }
  res.send(students)
})

// route with a route parameter
app.get('/students/:id', (req, res) => {
  const student = students.find(student => student.id === parseInt(req.params.id))
  res.send(student)
})

// listening on port 3000
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
})