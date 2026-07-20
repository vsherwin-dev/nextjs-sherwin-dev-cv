export interface ThemeInfo {
  name: string;
  theme: string;
  icon: string;
  publisher: string;
  mode: 'light' | 'dark';
}

export const THEMES: ThemeInfo[] = [
  {
    name: 'GitHub Light',
    theme: 'github-light',
    icon: '/themes/github-dark.png',
    publisher: 'GitHub',
    mode: 'light',
  },
  {
    name: 'GitHub Dark',
    theme: 'github-dark',
    icon: '/themes/github-dark.png',
    publisher: 'GitHub',
    mode: 'dark',
  },
  {
    name: 'Dracula',
    theme: 'dracula',
    icon: '/themes/dracula.png',
    publisher: 'Dracula Theme',
    mode: 'dark',
  },
  {
    name: 'Ayu Dark',
    theme: 'ayu-dark',
    icon: '/themes/ayu.png',
    publisher: 'teabyii',
    mode: 'dark',
  },
  {
    name: 'Ayu Mirage',
    theme: 'ayu-mirage',
    icon: '/themes/ayu.png',
    publisher: 'teabyii',
    mode: 'dark',
  },
  {
    name: 'Nord',
    theme: 'nord',
    icon: '/themes/nord.png',
    publisher: 'arcticicestudio',
    mode: 'dark',
  },
  {
    name: 'Night Owl',
    theme: 'night-owl',
    icon: '/themes/night-owl.png',
    publisher: 'sarah.drasner',
    mode: 'dark',
  },
];

export const THEME_KEYS = THEMES.map((t) => t.theme) as [string, ...string[]];

export const LIGHT_THEME = 'github-light';
export const DEFAULT_DARK_THEME = 'github-dark';

export function isLightTheme(theme: string) {
  return THEMES.find((t) => t.theme === theme)?.mode === 'light';
}

export function applyTheme(theme: string) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('theme', theme);
  if (!isLightTheme(theme)) {
    localStorage.setItem('last-dark-theme', theme);
  }
}
