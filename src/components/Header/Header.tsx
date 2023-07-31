import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { classNames } from '../../helpers/classHelper';
import { styles } from './styles';

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
    <header className={styles.header}>
      <img
        alt="emoij levi"
        className={styles.emoij}
        data-aos="fade-in"
        data-aos-duration="1000"
        src="../../assets/img/emoij-levi.svg"
      />
      <ul className={styles.ul}>
        {items?.map(({ title, link }, index) => (
          <li key={index}>
            <a href={link} className={styles.li}>
              {title}
            </a>
          </li>
        ))}
      </ul>
      <button className={styles.menuButton} onClick={() => setShowMenu(true)}>
        <FontAwesomeIcon icon={faBars} className={styles.menuButtonIcon} />
      </button>
      <div
        className={classNames(showMenu ? 'translate-x-0' : 'translate-x-full', styles.mobileMenu)}>
        <div className={styles.menuExitButtonContainer}>
          <button onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faXmark} className={styles.menuExitIcon} />
          </button>
        </div>
        <ul className={styles.mobileMenuList}>
          {items?.map(({ title, link }, index) => (
            <li key={index} className={styles.mobileMenuListItem}>
              <a href={link} className={styles.mobileMenuListItemLink}>
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
