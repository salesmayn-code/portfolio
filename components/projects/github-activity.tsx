import { Suspense } from "react";
import { ArrowUpRight, GitCommitHorizontal } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { getLatestRepositories, type GitHubRepository } from "@/lib/github";

export function GitHubActivity() {
  return (
    <div>
      <div className="border-border flex flex-col justify-between gap-4 border-b pb-5 sm:flex-row sm:items-end">
        <div>
          <p className="text-primary font-mono text-[10px] tracking-[0.1em] uppercase">
            github.sync
          </p>
          <h3 className="mt-3 font-mono text-xl font-semibold tracking-[-0.03em]">
            Latest repository activity
          </h3>
        </div>
        <a
          href="https://github.com/salesmayn-code"
          target="_blank"
          rel="noreferrer"
          className="text-muted-foreground hover:text-primary inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.08em] uppercase transition-colors"
        >
          view profile <ArrowUpRight className="size-3.5" />
        </a>
      </div>
      <Suspense fallback={<RepositorySkeleton />}>
        <LatestRepositories />
      </Suspense>
    </div>
  );
}

async function LatestRepositories() {
  const repositories = await getLatestRepositories("salesmayn-code");

  if (repositories.length === 0) {
    return (
      <p className="text-muted-foreground border-border border-b py-6 font-mono text-xs">
        [offline] GitHub activity is temporarily unavailable.
      </p>
    );
  }

  return (
    <div className="bg-border grid gap-px md:grid-cols-2 lg:grid-cols-3">
      {repositories.map((repository) => (
        <RepositoryCard key={repository.id} repository={repository} />
      ))}
    </div>
  );
}

function RepositoryCard({ repository }: { repository: GitHubRepository }) {
  return (
    <a
      href={repository.html_url}
      target="_blank"
      rel="noreferrer"
      className="bg-card hover:bg-muted group flex min-h-52 flex-col p-5 transition-colors"
    >
      <div className="flex items-start justify-between gap-3">
        <FaGithub className="text-muted-foreground size-4" aria-hidden="true" />
        <ArrowUpRight className="text-muted-foreground group-hover:text-primary size-4 transition-colors" />
      </div>
      <h4 className="mt-5 font-mono text-sm font-semibold break-words">
        {repository.name}
      </h4>
      <p className="text-muted-foreground mt-3 line-clamp-3 text-sm leading-6">
        {repository.description ?? "Public repository on GitHub."}
      </p>
      <div className="text-muted-foreground mt-auto flex items-center justify-between gap-3 pt-5 font-mono text-[9px] tracking-[0.06em] uppercase">
        <span>{repository.language ?? "Code"}</span>
        <span className="flex items-center gap-1.5">
          <GitCommitHorizontal className="size-3.5" />{" "}
          {relativeUpdate(repository.updated_at)}
        </span>
      </div>
    </a>
  );
}

function RepositorySkeleton() {
  return (
    <div
      className="bg-border grid gap-px md:grid-cols-2 lg:grid-cols-3"
      aria-label="Loading GitHub activity"
    >
      {[0, 1, 2].map((item) => (
        <div key={item} className="repo-skeleton h-52" />
      ))}
    </div>
  );
}

function relativeUpdate(value: string) {
  const days = Math.max(
    0,
    Math.floor((Date.now() - new Date(value).getTime()) / 86_400_000),
  );
  if (days === 0) return "today";
  if (days === 1) return "1d ago";
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  return `${months}mo ago`;
}
