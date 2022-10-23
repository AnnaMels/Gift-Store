import img from '../../images/about-section-img.png';
import { Button } from 'react-bootstrap';
import styles from './About.module.css';

const AboutSection = () => {
    return (
        <section className={styles.about_section} id="about">
            <div className={styles.about_wrapper}>
                <h2 className={styles.about_title}>How we work</h2>
                <p className={styles.about_text}>We’ve actually already asked hundreds of women what they want, and made a database with the results. All you have to do is take our short survey that only takes seconds, and our proprietary algorithm will match you with a few perfect gift options.</p>
                <div className={styles.button_wrapper}>
                    <Button className={styles.about_button} variant="outline-warning">LEARN MORE</Button>
                </div>
            </div>
            <div className={styles.img_wrapper}>
                <img className={styles.about_image} src={img} alt="Postcard" />
            </div>
        </section>
    );
};

export default AboutSection;