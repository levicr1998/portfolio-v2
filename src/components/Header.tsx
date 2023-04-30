import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { classNames } from '../helpers/classHelper';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const items = [
    {
      link: '#home',
      title: 'HOME'
    },
    {
      link: '#about-me-container',
      title: 'ABOUT'
    },
    {
      link: '#contact-container',
      title: 'CONTACT'
    }
  ];

  return (
    <header className="flex items-center justify-between w-full p-6 mx-auto">
      <img
        alt="emoij levi"
        className="w-14 h-14 xs:w-20 xs:h-20"
        data-aos="fade-in"
        data-aos-duration="1000"
        src="../assets/img/emoij-levi.svg"
      />
      <ul className="hidden md:flex">
        {items?.map(({ title, link }, index) => (
          <li key={index}>
            <a
              href={link}
              className="text-white/70 hover:text-white/100 px-2 font-bold ease-in-out duration-300">
              {title}
            </a>
          </li>
        ))}
      </ul>
      <button className="flex md:hidden" onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faBars} className="text-white w-6 h-6" />
      </button>
      <div
        className={classNames(
          showMenu ? 'translate-x-0' : 'translate-x-full',
          'fixed bg-white w-full h-full top-0 left-0 ease-in-out duration-300 overflow-x-hidden md:hidden'
        )}>
        <div className="flex justify-end">
          <button onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faXmark} className="text-primary-blue w-6 h-6 p-4" />
          </button>
        </div>
        <ul className="flex flex-col items-center">
          {items?.map(({ title, link }, index) => (
            <li key={index} className="py-2">
              <a href={link} className="text-primary-blue px-2 font-bold text-xl">
                {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
