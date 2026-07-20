'use client';

import Image from 'next/image';
import Link from 'next/link';
import { VscGithub, VscMail } from 'react-icons/vsc';

import {
  education,
  experience,
  getAge,
  services,
  site,
  skills,
} from '@/data/site';
import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.header}>
          <div className={styles.headerContent}>
            <Image
              src="/img/sherwin-dev.jpg"
              alt={site.name}
              width={72}
              height={72}
              className={styles.avatar}
              style={{ objectFit: 'cover' }}
            />
            <div className={styles.headerText}>
              <h1 className={styles.name}>{site.name}</h1>
              <p className={styles.role}>{site.role}</p>
              <div className={styles.location}>
                <span className={styles.dot} />
                {site.location}
              </div>
            </div>
          </div>

          <div className={styles.headerActions}>
            <a
              href={site.github}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.iconButton}
            >
              <VscGithub size={20} />
            </a>
            <Link href="/contact" className={styles.iconButton}>
              <VscMail size={20} />
            </Link>
          </div>
        </header>

        <div className={styles.content}>
          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>01</span>
              <h2 className={styles.sectionTitle}>About</h2>
            </div>

            <div className={styles.sectionBody}>
              {site.about.map((paragraph) => (
                <p className={styles.paragraph} key={paragraph}>
                  {paragraph}
                </p>
              ))}
              <p className={styles.paragraph}>
                <strong>Age:</strong> {getAge()} · <strong>Citizenship:</strong>{' '}
                {site.citizenship} · <strong>Email:</strong> {site.email}
              </p>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>02</span>
              <h2 className={styles.sectionTitle}>Experience</h2>
            </div>

            <div className={styles.sectionBody}>
              {experience.map((job) => (
                <div className={styles.experienceCard} key={`${job.role}-${job.company}-${job.period}`}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>{job.period}</span>
                  </div>
                  <h3 className={styles.expRole}>{job.role}</h3>
                  <p className={styles.expCompany}>
                    {job.link ? (
                      <a
                        href={job.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {job.company}
                      </a>
                    ) : (
                      job.company
                    )}
                  </p>
                  {job.bullets.length > 0 && (
                    <ul className={styles.expList}>
                      {job.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>03</span>
              <h2 className={styles.sectionTitle}>Education</h2>
            </div>

            <div className={styles.sectionBody}>
              {education.map((item) => (
                <div className={styles.experienceCard} key={item.school}>
                  <div className={styles.expMeta}>
                    <span className={styles.expPeriod}>
                      {item.period || item.level}
                    </span>
                  </div>
                  <h3 className={styles.expRole}>{item.degree}</h3>
                  <p className={styles.expCompany}>{item.school}</p>
                </div>
              ))}
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>04</span>
              <h2 className={styles.sectionTitle}>Skills</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {Object.entries(skills.tags).map(([title, tags]) => (
                  <div className={styles.skillCategory} key={title}>
                    <h4 className={styles.skillTitle}>{title}</h4>
                    <div className={styles.skillTags}>
                      {tags.map((tag) => (
                        <span className={styles.skillTag} key={tag}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 24 }}>
                {skills.coding.map((skill) => (
                  <div key={skill.name} style={{ marginBottom: 14 }}>
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        marginBottom: 6,
                        fontSize: 13,
                      }}
                    >
                      <span>{skill.name}</span>
                      <span style={{ color: 'var(--accent-color)' }}>
                        {skill.level}%
                      </span>
                    </div>
                    <div
                      style={{
                        width: '100%',
                        height: 6,
                        borderRadius: 999,
                        background: 'var(--surface-hover)',
                        overflow: 'hidden',
                      }}
                    >
                      <div
                        style={{
                          width: `${skill.level}%`,
                          height: '100%',
                          background: 'var(--accent-color)',
                          borderRadius: 999,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>05</span>
              <h2 className={styles.sectionTitle}>Knowledge & Certificates</h2>
            </div>

            <div className={styles.sectionBody}>
              <ul className={styles.expList}>
                {skills.knowledge.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <ul className={styles.expList} style={{ marginTop: 16 }}>
                {skills.certificates.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </section>

          <section className={styles.section}>
            <div className={styles.sectionHeader}>
              <span className={styles.sectionNumber}>06</span>
              <h2 className={styles.sectionTitle}>Services</h2>
            </div>

            <div className={styles.sectionBody}>
              <div className={styles.skillsGrid}>
                {services.map((service) => (
                  <div className={styles.skillCategory} key={service.title}>
                    <h4 className={styles.skillTitle}>{service.title}</h4>
                    <p className={styles.paragraph}>{service.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </div>

        <footer className={styles.footer}>
          <Link href="/projects" className={styles.footerLink}>
            View my projects →
          </Link>
        </footer>
      </div>
    </div>
  );
};

export default AboutPage;
