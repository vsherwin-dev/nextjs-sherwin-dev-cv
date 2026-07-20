import { Metadata } from 'next';
import Image from 'next/image';
import {
  VscRepo,
  VscPerson,
  VscStarEmpty,
  VscRepoForked,
  VscLinkExternal,
  VscGithub,
} from 'react-icons/vsc';

import GithubCalendar from '@/components/GithubCalendar';
import { Repo, User } from '@/types';
import { site } from '@/data/site';

import styles from '@/styles/GithubPage.module.css';

export const metadata: Metadata = {
  title: 'GitHub',
};

export const revalidate = 600;

const GITHUB_USERNAME =
  process.env.NEXT_PUBLIC_GITHUB_USERNAME ||
  site.github.replace('https://github.com/', '');

async function getGithubData() {
  const headers: HeadersInit = {
    Accept: 'application/vnd.github+json',
  };

  if (process.env.GITHUB_API_KEY) {
    headers.Authorization = `Bearer ${process.env.GITHUB_API_KEY}`;
  }

  const userRes = await fetch(`https://api.github.com/users/${GITHUB_USERNAME}`, {
    headers,
    next: { revalidate: 600 },
  });

  if (!userRes.ok) {
    throw new Error(`Failed to fetch GitHub user: ${userRes.status}`);
  }

  const user: User = await userRes.json();

  const repoRes = await fetch(
    `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=pushed&per_page=6`,
    {
      headers,
      next: { revalidate: 600 },
    }
  );

  if (!repoRes.ok) {
    throw new Error(`Failed to fetch GitHub repos: ${repoRes.status}`);
  }

  const repos: Repo[] = await repoRes.json();

  return { user, repos };
}

export default async function GithubPage() {
  const { user, repos } = await getGithubData();

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.profile}>
            <Image
              src={user.avatar_url}
              className={styles.avatar}
              alt={user.login}
              width={80}
              height={80}
              priority
            />
            <div className={styles.profileInfo}>
              <h1 className={styles.name}>{user.login}</h1>
              <span className={styles.handle}>@{user.login}</span>
            </div>
          </div>

          <a
            href={`https://github.com/${user.login}`}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.profileLink}
          >
            <VscGithub size={18} />
            <span>View Profile</span>
            <VscLinkExternal size={14} />
          </a>
        </header>

        <div className={styles.statsGrid}>
          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepo size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.public_repos}</span>
              <span className={styles.statLabel}>Repositories</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscPerson size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>{user.followers}</span>
              <span className={styles.statLabel}>Followers</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscStarEmpty size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce((acc, repo) => acc + repo.stargazers_count, 0)}
              </span>
              <span className={styles.statLabel}>Total Stars</span>
            </div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statIcon}>
              <VscRepoForked size={20} />
            </div>
            <div className={styles.statInfo}>
              <span className={styles.statValue}>
                {repos.reduce((acc, repo) => acc + repo.forks, 0)}
              </span>
              <span className={styles.statLabel}>Total Forks</span>
            </div>
          </div>
        </div>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Contribution Activity</h2>
          <div className={styles.contributions}>
            <GithubCalendar username={user.login} />
          </div>
        </section>
      </div>
    </div>
  );
}
