import { getGithubOrgs } from "./API.js";
import { renderGithubOrgs } from "./DOM.js";

const init = async () => {
  const orgs = await getGithubOrgs();
  renderGithubOrgs(orgs);
}

init();