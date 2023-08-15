const client = require('./client');

async function dropTables() {
  try {
    console.log('Dropping All Tables...');
    await client.query(`
      DROP TABLE IF EXISTS students;
    `);
  } catch (error) {
      throw error;
  }
}

// build all tables
async function createTables() {
  try {
      console.log('Building All Tables...');
      await client.query(`
      CREATE TABLE students (
        id SERIAL PRIMARY KEY,
        name VARCHAR(255) NOT NULL
      );`);
  } catch (error) {
      throw error;
  }
}

async function seedStudents() {
  const students = [
    'John Doe',
    'Jane Doe',
    'John Smith',
    'Jane Smith'
  ]
  try {
      console.log('Creating Students...');
      students.map(async (student) => {
        return client.query(`
          INSERT INTO students (name)
          VALUES ($1);
        `, [student]
        );
      });
  } catch (error) {
      throw error;
  }
}

async function rebuildDB() {
  try {
    client.connect();
    await dropTables();
    await createTables();
    await seedStudents();
  } catch(error) {
    console.log(error);
  }
}
