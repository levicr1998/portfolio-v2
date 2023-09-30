import { styles } from './styles';
import { ReactElement, SVGProps } from 'react';
import { SendIcon } from '../icons';
import { classNames } from '../../helpers/classHelper';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';

type Props = {
  items: Item[];
  themeColor?: string;
};

type Item = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement<any, any> | null;
  link: string;
  isGithubIcon?: boolean;
};

const Footer = ({ items, themeColor = 'primary-blue' }: Props) => (
  <div id="contact-container" className={styles.container}>
    <motion.div
      className={styles.contactContainer}
      viewport={{ once: true }}
      initial={{ opacity: 0, x: 200 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{
        duration: 0.5
      }}>
      <h3 className={twMerge(styles.contactTitle, `text-${themeColor}`)}>Contact me</h3>
      <span className={styles.contactSubtitle}>Feel free to send me a message!</span>
      <a
        href="mailto:levicrietee@hotmail.com"
        className={classNames(styles.contactButton, `border-${themeColor} hover:bg-${themeColor}`)}>
        <div className={classNames(styles.sendContainer, `text-${themeColor}`)}>
          <SendIcon className={classNames(styles.sendIcon, `fill-${themeColor}`)} />
          <span className={styles.contactButtonTitle}>Get in touch</span>
        </div>
      </a>
    </motion.div>
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        {items.map(({ icon: Icon, link, isGithubIcon }, index) => (
          <li key={index} className={styles.li}>
            <a href={link}>
              <Icon
                className={classNames(
                  styles.img,
                  `fill-${themeColor}`,
                  isGithubIcon && '-translate-y-1'
                )}
              />
            </a>
          </li>
        ))}
      </ul>
      <p className={twMerge(styles.copyrightText, `text-${themeColor}`)}>
        © {new Date().getFullYear()} - Levi Crietee
      </p>
    </footer>
  </div>
);

export default Footer;
