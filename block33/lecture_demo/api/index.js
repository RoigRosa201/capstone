const express = require('express');
const router = express.Router();

// routes
// /students
router.get('/', async (req, res) => { // callback request, response in parameter
  const students = await getStudents();
  res.send(students);
})
// route with a route parameter
// /students/:id
router.get('/:id', async (req, res) => {
  const student = await getStudentById(req.params.id);
  res.send(student)
})

// /students
router.post('/', async (req, res) => {
  const newStudent = await createStudent(req.body.name); // passing it in the request body
  res.send(newStudent)
})

router.put('/:id', async (req, res) => {
  const updatedStudent = await updateStudent(req.params.id, req.body.name);
  res.send(updatedStudent)
})

router.delete('/:id', async (req, res) => {
  const deletedStudent = await deleteStudent(req.params.id);
  res.send(deletedStudent)
})

module.exports = router;