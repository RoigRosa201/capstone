// const listEl = document.querySelector('ul');

// const getUsers = async () => {
//   const response = await fetch('https://api.github.com/users?since=1000');
//   console.log(response);
//   const users = await response.json();
//   const template = users.map(user => `
//     <li>
//       <p>Username: ${user.login}</p>
//       <img src="${user.avatar_url}">
//       <p><a href="${user.repos_url}">List of repos</a>
//     </li>
//   `)
//   listEl.innerHTML = template.join('')
// }

// getUsers();

const formEl = document.querySelector('form');
const sectionEl = document.querySelector('section');
const usernameInput = document.querySelector('input');

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const username = usernameInput.value;
  
  const response = await fetch(`https://api.github.com/users/${username}`);
  const user = await response.json();
  console.log(user);
  const { name, login, company, avatar_url, location } = user;
  const template = `
    <h2>${name}</h2>
    <img src="${avatar_url}">
    <h3>Username: ${login}</h3>
    <h4>Location: ${location}</h4>
    <p>Works for: ${company}</p>
  `
  sectionEl.innerHTML = template;
  usernameInput.value = '';
})