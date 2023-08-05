import BackIcon from '../icons/BackIcon';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';

const BackButton = () => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={styles.button}>
      <BackIcon />
    </button>
  );
};

export default BackButton;
