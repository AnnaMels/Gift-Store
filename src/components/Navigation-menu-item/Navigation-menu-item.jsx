import styles from './Navigation-menu-item.module.css';

const NavigationMenuItem = () => {
    return (
        <>
            <li className={styles.menu_item}><a className={styles.menu_link} href="#hero">Home</a></li>
            <li className={styles.menu_item}><a className={styles.menu_link} href="#about">About Us</a></li>
            <li className={styles.menu_item}><a className={styles.menu_link} href="#services">Services</a></li>
            <li className={styles.menu_item}><a className={styles.menu_link} href="#blogs">Blogs</a></li>
        </>
    );
};

export default NavigationMenuItem;