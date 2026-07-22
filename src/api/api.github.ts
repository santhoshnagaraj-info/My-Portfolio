

  // Fetch repos
  const GitHubMainUrl = await fetch(
    "https://api.github.com/users/santhoshnagaraj-info/repos"
  );
export  const CountRepos = await GitHubMainUrl.json();

export async function getGithubData() {



}
