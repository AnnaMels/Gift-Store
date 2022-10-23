import NavigationMenuItem from "../Navigation-menu-item";
import styles from './Navigation-menu.module.css';

const NavigationMenu = () => {
    return (
        <ul className={styles.menu_list}>
            <NavigationMenuItem />
        </ul>
    );
};

export default NavigationMenu;