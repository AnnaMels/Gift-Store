import styles from './Logo.module.css';

const Logo = () => {
    return (
        <>
            <a className={styles.logo_link} href="/"><span className={styles.logo}>logo</span></a>
        </>
    );
};

export default Logo;