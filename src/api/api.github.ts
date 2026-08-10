
export const github_url = "https://api.github.com";
export const github_name = "santhoshnagaraj-info";

export async function getGithubReposCount(): Promise<number> {
  const response = await fetch(`${github_url}/users/${github_name}`);

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub data");
  }

  const data = await response.json();
  return data.public_repos;
}

export async function getGithubCommitsCount(): Promise<number> {
  const response = await fetch(
    `${github_url}/search/commits?q=author:${github_name}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch GitHub commits");
  }

  const data = await response.json();
  return data.total_count;
}


