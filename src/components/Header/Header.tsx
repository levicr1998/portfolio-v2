import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons';
import { classNames } from '../../helpers/classHelper';
import { styles } from './styles';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { headerItems } from './data';

const Header = () => {
  const [showMenu, setShowMenu] = useState<boolean>(false);
  return (
    <header className={styles.header}>
      <motion.img
        alt="emoij levi"
        className={styles.emoij}
        data-aos="fade-in"
        data-aos-duration="1000"
        src="../../assets/img/emoij-levi.svg"
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
