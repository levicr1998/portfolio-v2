import { BackIcon } from '../icons';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';
import { motion } from 'framer-motion';
import { animationProps } from '../../helpers';

type Props = {
  className?: string;
};

const BackButton = ({ className }: Props) => {
  const navigate = useNavigate();
  return (
    <motion.button
      onClick={() => navigate(-1)}
      className={twMerge(styles.button, className)}
      {...animationProps(-50)}>
      <BackIcon className={styles.backIcon} />
    </motion.button>
  );
};

export default BackButton;
