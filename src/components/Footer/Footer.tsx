import { styles } from './styles';
import { ReactElement, SVGProps } from 'react';
import { SendIcon } from '../icons';
import { classNames } from '../../helpers/classHelper';
import { twMerge } from 'tailwind-merge';

type Props = {
  items: Item[];
  defaultColor?: string;
};

type Item = {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement<any, any> | null;
  link: string;
};

const Footer = ({ items, defaultColor = 'primary-blue' }: Props) => (
  <div className={styles.container}>
    <div className={styles.contactContainer}>
      <h3 className={twMerge(styles.contactTitle, `text-${defaultColor}`)}>Contact me</h3>
      <span className={styles.contactSubtitle}>Feel free to send me a message!</span>
      <button
        className={classNames(
          styles.contactButton,
          `border-${defaultColor} hover:bg-${defaultColor}`
        )}>
        <div className={classNames('flex items-center justify-center', `text-${defaultColor}`)}>
          <SendIcon className={`fill-${defaultColor}`} />
          <span className="ml-1.5">Get in touch</span>
        </div>
      </button>
    </div>
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        {items.map(({ icon: Icon, link }, index) => (
          <li key={index} className={styles.li}>
            <a href={link}>
              <Icon className={classNames(styles.img, 'w-12 h-12', `fill-${defaultColor}`)} />
            </a>
          </li>
        ))}
      </ul>
      <p className={twMerge(styles.copyrightText, `text-${defaultColor}`)}>
        © {new Date().getFullYear()} - Levi Crietee
      </p>
    </footer>
  </div>
);

export default Footer;
