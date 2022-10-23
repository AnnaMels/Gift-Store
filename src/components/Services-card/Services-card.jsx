import { useState } from "react";
import styles from './Services-card.module.css';
import SeeMoreBtn from '../SeeMoreBtn';
import { Button } from 'react-bootstrap';
import getImageByKey from "../../assets/getImageByKey";


const ServicesCard = ({imgKey, title, price}) => {
    const [buttonValue, setButtonValue] = useState(0);
    const payment = document.getElementById('payment');
    payment.dataset.amount = buttonValue;

    var DOMContentLoaded_event = document.createEvent("Event")
    DOMContentLoaded_event.initEvent("DOMContentLoaded", true, true)
    window.document.dispatchEvent(DOMContentLoaded_event);


    const setPrice = (e) => {
        const priceValue = parseInt(e.target.dataset.price);
        setButtonValue(priceValue);
    }
    

    return (
        <>
            <li className={styles.card}>
                <img className={styles.card_img} src={getImageByKey(imgKey)} alt={title} />
                <div className={styles.card_text_wrapper}>
                    <div onClickCapture={setPrice}  className={styles.price_container}>
                        <h3 className={styles.card_title}>{title}</h3>
                        <div className={styles.price_btn_container}>
                            {/* <button  className='rsWidgetButton' >Buy</button> */}
                            <Button data-price={price} variant="warning"  className='rsWidgetButton'>Price {price / 100}$</Button>
                            </div>
                        </div>
                    <SeeMoreBtn />
                </div>
            </li>
        </>
    );
};

export default ServicesCard;
