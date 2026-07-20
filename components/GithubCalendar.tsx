'use client';

import { GitHubCalendar } from 'react-github-calendar';

interface GithubCalendarProps {
  username: string;
}

const GithubCalendar = ({ username }: GithubCalendarProps) => {
  return (
    <GitHubCalendar
      username={username}
      showColorLegend={false}
      showMonthLabels={false}
      colorScheme="dark"
      theme={{
        dark: ['#161B22', '#0e4429', '#006d32', '#26a641', '#39d353'],
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
      }}
      style={{
        width: '100%',
      }}
    />
  );
};

export default GithubCalendar;
