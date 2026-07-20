'use client';

import { useState, useEffect } from 'react';
import { VscColorMode } from 'react-icons/vsc';

import { THEMES, applyTheme, DEFAULT_DARK_THEME } from '@/lib/themes';
import ThemeInfo from '@/components/ThemeInfo';

import styles from '@/styles/SettingsPage.module.css';

const SettingsPage = () => {
  const [activeTheme, setActiveTheme] = useState(DEFAULT_DARK_THEME);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || DEFAULT_DARK_THEME;
    setActiveTheme(savedTheme);
    setIsLoaded(true);
  }, []);

  const handleThemeSelect = (theme: string) => {
    applyTheme(theme);
    setActiveTheme(theme);
  };

  if (!isLoaded) {
    return null;
  }

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.iconWrapper}>
            <VscColorMode className={styles.icon} size={24} />
          </div>
          <div className={styles.headerContent}>
            <h1 className={styles.title}>Settings</h1>
            <p className={styles.subtitle}>
              Customize your editor appearance. Use GitHub Light / Dark for a
              quick theme switch, or pick another editor theme. You can also
              toggle Light / Dark from the status bar.
            </p>
          </div>
        </header>

        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>Color Theme</h2>

          <div className={styles.themesGrid}>
            {THEMES.map((theme) => (
              <ThemeInfo
                key={theme.theme}
                icon={theme.icon}
                name={theme.name}
                publisher={theme.publisher}
                theme={theme.theme}
                isActive={activeTheme === theme.theme}
                onSelect={handleThemeSelect}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default SettingsPage;
