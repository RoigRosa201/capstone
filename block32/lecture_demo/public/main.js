async function createStudent () {
  const student = {
    name: 'Marsha King'
  }
  const response = await fetch('http://localhost:3000/students', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(student)
  });
  const data = await response.json();
  console.log(data);
}

createStudent();