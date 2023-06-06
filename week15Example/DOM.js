const listEl = document.querySelector('.list-container');

export function renderGithubOrgs(orgs) {
  const template = orgs.map(org => `
    <li class="list-item">${org.login}</li>
  `);
  listEl.innerHTML = template.join('');
}