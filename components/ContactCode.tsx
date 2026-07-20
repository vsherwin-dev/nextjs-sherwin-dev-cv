import { site } from '@/data/site';

import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'email',
    link: site.email,
    href: `mailto:${site.email}`,
  },
  {
    social: 'github',
    link: 'vsherwin-dev',
    href: site.github,
  },
  {
    social: 'linkedin',
    link: 'neil-sherwin-velasquez',
    href: site.linkedin,
  },
  {
    social: 'twitter',
    link: 'sherwinonlyy',
    href: site.twitter,
  },
  {
    social: 'facebook',
    link: 'sherwinonlyy',
    href: site.facebook,
  },
  {
    social: 'instagram',
    link: 'hoysherwin',
    href: site.instagram,
  },
  {
    social: 'location',
    link: site.location,
    href: '#',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener noreferrer">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
