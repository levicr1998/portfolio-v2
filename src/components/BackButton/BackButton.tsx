import { BackIcon } from '../icons';
import { useNavigate } from 'react-router-dom';
import { styles } from './styles';
import { twMerge } from 'tailwind-merge';

type Props = {
  className?: string;
};

const BackButton = ({ className }: Props) => {
  const navigate = useNavigate();
  return (
    <button onClick={() => navigate(-1)} className={twMerge(styles.button, className)}>
      <BackIcon className="w-10 h-10" />
    </button>
  );
};

export default BackButton;
