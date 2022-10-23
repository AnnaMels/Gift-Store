import { useState, useEffect } from "react";
import Logo from '../Logo';
import { ReactComponent as Icon } from '../Icons/icon-menu.svg';
import NavigationMenu from '../Navigation-menu';
import { Button } from 'react-bootstrap';


import styles from './Header.module.css';

const Header = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const [dimensions, setDimensions] = useState({
        width: window.innerWidth,
    });


    useEffect(() => {
        function handleResize() {
            setDimensions({
                width: window.innerWidth
            });
            if (dimensions.width >= 480) {
                setOpenMenu(false)
            };
        }
        window.addEventListener('resize', handleResize);

    }, [dimensions.width]);

    const onButtonClick = () => {
        setOpenMenu(!openMenu);
    };


    return (
        <header className={styles.header}>
            <Logo />
            {dimensions.width >= 480 && <NavigationMenu />}
            {dimensions.width < 480 && <Icon className={styles.header_menu_icon} onClick={onButtonClick} />}
            {openMenu && <NavigationMenu />}
            <Button className={styles.header_button} variant="outline-warning">GIFT FINDER</Button>
        </header>
    );
};

export default Header;