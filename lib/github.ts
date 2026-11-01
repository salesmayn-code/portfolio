export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  fork: boolean;
  archived: boolean;
}

export async function getLatestRepositories(username: string) {
  try {
    const response = await fetch(
      `https://api.github.com/users/${username}/repos?sort=updated&per_page=6`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      },
    );

    if (!response.ok) return [];

    const repositories = (await response.json()) as GitHubRepository[];
    return repositories.filter(
      (repository) =>
        !repository.fork && !repository.archived && repository.name !== username,
    );
  } catch {
    return [];
  }
}
