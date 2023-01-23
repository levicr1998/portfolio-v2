type Props = {
  items: Item[];
};

type Item = {
  src: string;
  alt: string;
  link: string;
};

const Footer = ({ items }: Props) => (
  <footer className="flex items-center flex-col w-full">
    <ul className="flex flex-row items-center">
      {items.map(({ src, alt, link }, index) => (
        <li
          key={index}
          className="px-2 hover:cursor-pointer transition hover:transform hover:-translate-y-4 hover:scale-110">
          <a href={link}>
            <img src={src} alt={alt} className="w-8 h-8" />
          </a>
        </li>
      ))}
    </ul>
    <p className="text-primary-blue mt-3">© {new Date().getFullYear()} - Levi Crietee</p>
  </footer>
);

export default Footer;
