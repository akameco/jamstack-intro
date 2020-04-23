const listRepos = async (username) => {
  const respos = await fetch(
    `https://api.github.com/users/${username}/repos?type=owner&sort=updated`
  )
    .then((res) => res.json())
    .catch((error) => console.error(error));

  const markup = respos
    .map(
      (repo) => `
      <li>
        <a href="${repo.html_url}">${repo.name}</a>
        (⭐️ ${repo.stargazers_count})
      </li>
    `
    )
    .join("");

  const content = document.querySelector("#content");

  content.innerHTML = `<ul>${markup}</ul>`;
};

listRepos("akameco");
