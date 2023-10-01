import { useEffect, useState } from 'react';
import { classNames } from '../../helpers/classHelper';
import { styles } from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { headerItems } from './data';
import { BarsIcon, XMarkIcon } from '@portfolio/components/icons';
import emoijUrl from '@portfolio/assets/img/emoij-levi.svg';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    if (showMenu) {
      document.body.style.overflowY = 'hidden';
    } else {
      document.body.style.overflowY = 'visible';
    }
  }, [showMenu]);

  return (
    <header className={styles.header}>
      <motion.img
        alt="emoij levi"
        className={styles.emoij}
        data-aos="fade-in"
        data-aos-duration="1000"
        src={emoijUrl}
        viewport={{ once: true }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1, rotate: 720 }}
        transition={{
          duration: 1
        }}
      />
      <ul className={styles.ul}>
        {headerItems?.map(({ title, link, delay }, index) => (
          <motion.li
            key={index}
            viewport={{ once: true }}
            initial={{ opacity: 0, x: 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{
              duration: 0.3,
              delay
            }}>
            <Link to={link} className={styles.li}>
              {title}
            </Link>
          </motion.li>
        ))}
      </ul>
      <button className={styles.menuButton} onClick={() => setShowMenu(true)}>
        <BarsIcon className={styles.menuButtonIcon} />
      </button>
      <div
        className={classNames(showMenu ? 'translate-x-0' : 'translate-x-full', styles.mobileMenu)}>
        <div className={styles.menuExitButtonContainer}>
          <button onClick={() => setShowMenu(false)}>
            <XMarkIcon className={styles.menuExitIcon} />
          </button>
        </div>
        <ul className={styles.mobileMenuList}>
          {headerItems?.map(({ title, link }, index) => (
            <li key={index} className={styles.mobileMenuListItem}>
              <Link
                to={link}
                className={styles.mobileMenuListItemLink}
                onClick={() => setShowMenu(false)}>
                {title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Header;
