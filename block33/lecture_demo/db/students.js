const client = require('./client');

const getStudents = async () => {
  try {
    const { rows } = await client.query('SELECT * FROM students;');
    return rows;
  } catch (error) {
    console.log(error);
  }
};

const getStudentById = async (id) => {
  try {
    // array destructuring to get the student
    const { rows: [student] } = await client.query(`
      SELECT * FROM students
      WHERE id=$1;
    `, [id]); // plug in id into prepared statement (the $1)
    return student;
  } catch (error) {
    console.log(error);
  }
}

const createStudent = async ( name ) => {
  try {
    const { rows: [student] } = await client.query(`
      INSERT INTO students(name)
      VALUES($1)
      returning *;
    `, [name]);
    // returning * returns the newly created student
    return student;
  } catch (error) {
    console.log(error);
  }
}

const updateStudent = async (id, name) => {
  try {
    const { rows: [student] } = await client.query(`
      UPDATE students
      SET name=$1
      WHERE id=$2
      returning *;
    `, [name, id]);
    return student;
  } catch (error) {
    console.log(error);
  }
}

const deleteStudent = async (id) => {
  try {
    const { rows: [student] } = await client.query(`
      DELETE FROM students
      WHERE id=$1
      returning *;
    `, [id]);
    return student;
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent
}