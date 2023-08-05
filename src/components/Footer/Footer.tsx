import { styles } from './styles';
import { SVGProps } from 'react';
import Send from '../icons/Send';

type Props = {
  items: Item[];
};

type Item = {
  icon: (props: SVGProps<SVGSVGElement>) => JSX.Element;
  link: string;
};

const Footer = ({ items }: Props) => (
  <div className={styles.container}>
    <div className={styles.contactContainer}>
      <h3 className={styles.contactTitle}>Contact me</h3>
      <span className={styles.contactSubtitle}>Feel free to send me a message!</span>
      <button className={styles.contactButton}>
        <div className='flex items-center justify-center'>
          <Send />
          <span className='ml-1.5'>Get in touch</span>
        </div>
      </button>
    </div>
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        {items.map(({ icon: Icon, link }, index) => (
          <li key={index} className={styles.li}>
            <a href={link}>
              <Icon className={styles.img} />
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyrightText}>© {new Date().getFullYear()} - Levi Crietee</p>
    </footer>
  </div>
);

export default Footer;
