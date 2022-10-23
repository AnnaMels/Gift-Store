import { Button } from 'react-bootstrap';
import img from '../../images/hero-img.png';
import styles from './Hero.module.css';


const Hero = () => {
    return (
        <section className={styles.hero_section} id="hero">
            <div className={styles.hero_wrapper}>
                <h1 className={styles.hero_title}>Find a gift for your wife or girlfriend</h1>
                <p className={styles.hero_text}>Struggling to find a gift for your wife or girlfriend?
                    No problem!</p>
                <div className={styles.button_wrapper}>
                    <Button className={styles.hero_button} variant="warning">Find gift now</Button>
                </div>
            </div>
            <div>
                <img className={styles.hero_image} src={img} alt="Couple" />
            </div>
        </section>
    );
};

export default Hero;