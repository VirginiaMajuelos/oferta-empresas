import { VscSettings } from 'react-icons/vsc';
import { Link } from 'react-router-dom';


import styles from './BannerConfigurador.module.css';

export const BannerConfigurador: React.FC = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.bannerContent}>
        <VscSettings size={52}/>
        <div className={styles.bannerContent__text}>
          <h2 className={styles.bannerTitle}>
          ¡Configura tu tarifa a medida!
          </h2>
          <p className={styles.bannerDescription}>
          Elige la mejor combinación para tu empresa:
          </p>
        </div>
      </div>
      <div className={styles.bannerImage}>
        <Link to={'/configura-tarifa'} className={styles.button}>Configura ahora</Link>

        {/* <img
          src='https://via.placeholder.com/150' // Reemplaza con una imagen representativa
          alt='Fibra y Móvil'
        /> */}
      </div>
    </div>
  );
};

