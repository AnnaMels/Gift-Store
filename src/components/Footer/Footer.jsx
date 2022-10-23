import Logo from "../Logo";
import styles from './Footer.module.css';
import { ReactComponent as Facebook } from '../Icons/facebook.svg';
import { ReactComponent as Twitter } from '../Icons/twitter.svg';
import { ReactComponent as Insta } from '../Icons/insta.svg'
import { ReactComponent as Youtube } from '../Icons/youtube.svg'
import { ReactComponent as Pinterest } from '../Icons/pinterest.svg'


const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.logo_wrapper}>
                <Logo />
            </div>
            <ul className={styles.footer_list}>
                <li>
                    <a href="https://uk-ua.facebook.com/">
                        <Facebook />
                    </a>
                </li>
                <li>
                    <a href="https://twitter.com/?lang=ru">
                        <Twitter />
                    </a>
                </li>
                <li>
                    <a href="https://www.instagram.com/">
                        <Insta />
                    </a>
                </li>
                <li>
                    <a href="https://www.youtube.com/">
                        <Youtube />
                    </a>
                </li>
                <li>
                    <a href="https://ru.pinterest.com/">
                        <Pinterest />
                    </a>
                </li>
            </ul>
            <p className={styles.footer_copy}>© 2010 — 2020</p>
        </footer>
    );
};

export default Footer;