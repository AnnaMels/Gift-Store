import { Button } from 'react-bootstrap';
import styles from './Feedback.module.css';

const Feedback = () => {
    return (
        <section className={styles.feedback_section}>
            <div>
                <p className={styles.feedback_title}>Ready to get started?</p>
                <p className={styles.feedback_text}>Sign up or contact us</p>
            </div>
            <div>
                <Button className={styles.dark_btn} variant="dark">FIND GIFT NOW</Button>
                <Button className={styles.orange_btn} variant="warning">HOW IT WORKS</Button>
            </div>
        </section>
    );
};

export default Feedback;