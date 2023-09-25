import { styles } from './styles';
import { ReactElement, SVGProps } from 'react';
import { SendIcon } from '../icons';
import { classNames } from '../../helpers/classHelper';
import { twMerge } from 'tailwind-merge';

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
  <div className={styles.container}>
    <div className={styles.contactContainer}>
      <h3 className={twMerge(styles.contactTitle, `text-${themeColor}`)}>Contact me</h3>
      <span className={styles.contactSubtitle}>Feel free to send me a message!</span>
      <button
        className={classNames(styles.contactButton, `border-${themeColor} hover:bg-${themeColor}`)}>
        <div className={classNames(styles.sendContainer, `text-${themeColor}`)}>
          <SendIcon className={classNames(styles.sendIcon, `fill-${themeColor}`)} />
          <span className={styles.contactButtonTitle}>Get in touch</span>
        </div>
      </button>
    </div>
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
