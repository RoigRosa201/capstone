const token = 'PUT_TOKEN_HERE';
const reposList = document.querySelector('ul');

async function fetchRepos() {
  const response = await fetch(`https://api.github.com/users/gatorpazz/repos?per_page=100`,{
    method: "GET",
    headers: {
      Authorization: `token ${token}` 
    }
  })
  const data = await response.json();
  renderRepos(data);
}

fetchRepos()

function renderRepos(repos) {
  const template = repos.map(({name, id}) => (
    `
      <li>
        <h2>Name: ${name}</h2>
        <button data-name="${name}">Delete Repo</button>
      </li>
    `
  ))
  reposList.innerHTML = template.join('')
}

reposList.addEventListener('click', async function(e) {
  if(e.target.matches('button')) {
    const response = await fetch(`https://api.github.com/repos/gatorpazz/${e.target.dataset.name}`,{
      method: "DELETE",
      headers: {
        Authorization: `token ${token}` 
      }
    });
    fetchRepos();
  }
})