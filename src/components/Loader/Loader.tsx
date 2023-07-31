import {styles} from "./styles";

const Loader = () => (
  <div>
    <div className={styles.container}>
      <div className={styles.iconContainer}>
        <img className={styles.icon} src="../../assets/img/icons/spinning-circles.svg" alt="Spinner icon" />
      </div>
    </div>
  </div>
);

export default Loader;
