import image from '../../images/Couple.png';
import styles from './Blog.module.css';
import SeeMoreBtn from '../SeeMoreBtn';
const Blog = () => {
    return (
        <section id="blogs" className={styles.blog_section}>
            <h2>Our Best Blogs Ever</h2>
            <p>“Try our blog to find the best tips and tricks to select your gift”</p>
            <div>
                <div className={styles.quote_container}>
                    <img className={styles.blog_img} src={image} alt="Couple" />
                    <div className={styles.quote}>
                        <p>Mr. John Doe</p>
                        <h3 className={styles.quote_title}>The best way to wish your wife</h3>
                    </div>
                </div>
                <ul className={styles.blog_cards}>
                    <li className={styles.card_item}>
                        <h3 className={styles.card_title}>Database to find the gifts for your  girlfriend</h3>
                        <p className={styles.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <SeeMoreBtn className={styles.see_more} />
                    </li>
                    <li className={styles.card_item}>
                        <h3 className={styles.card_title}>How Artificial Intelligence read your mind to find the best gift</h3>
                        <p className={styles.card_text}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore...</p>
                        <SeeMoreBtn />
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default Blog;