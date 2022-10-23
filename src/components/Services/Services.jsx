import ServicesCard from "../Services-card";
import styles from './Services.module.css';
import items from '../../assets/items.json';
import { nanoid } from 'nanoid';

const Services = () => {
        
    return (
        <section className={styles.services} id='services'>
            <h2 className={styles.services_title}>Gifts for all Occasions</h2>
            <p className={styles.services_text}>“Try our web app to find the best gifts for all occasions”</p>
            <ul className={styles.card_list}>
                {items.map(item => <ServicesCard key={nanoid()} imgKey={item.key} title={item.title} description={item.description} price={item.price} priceText={item.priceText} />)}
            </ul>
        </section>
    );
};

export default Services;