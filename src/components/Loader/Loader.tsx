import { styles } from './styles';
import SpinningCircles from '../icons/SpinningCircles';

const Loader = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <SpinningCircles className={styles.icon} />
      </div>
    </div>
  </div>
);

export default Loader;
