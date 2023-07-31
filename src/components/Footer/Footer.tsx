import { styles } from './styles';

type Props = {
  items: Item[];
};

type Item = {
  src: string;
  alt: string;
  link: string;
};

const Footer = ({ items }: Props) => (
  <div className="flex items-center flex-col w-full relative">
    <div className="bg-white w-1/2 absolute -top-32 flex flex-col p-12 drop-shadow-2xl">
      <h3 className="text-3xl font-extrabold text-primary-blue my-4">My projects</h3>
      <span className="my-4">Feel free to send me a message!</span>
      <button className="border border-primary-blue text-primary-blue font-bold w-56 py-2.5 hover:bg-primary-blue hover:text-white">
        Get in touch
      </button>
    </div>
    <footer className={styles.footer}>
      <ul className={styles.ul}>
        {items.map(({ src, alt, link }, index) => (
          <li key={index} className={styles.li}>
            <a href={link}>
              <img src={src} alt={alt} className="" />
            </a>
          </li>
        ))}
      </ul>
      <p className={styles.copyrightText}>© {new Date().getFullYear()} - Levi Crietee</p>
    </footer>
  </div>
);

export default Footer;
