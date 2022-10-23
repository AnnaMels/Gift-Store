import Birthday from '../images/Birthday.png';
import Anniversary from '../images/Anniversary.png';
import Valentine from '../images/Valentine-day.png';
import Christmas from '../images/Christmas.png';

const images = {
    Birthday,
    Anniversary,
    Valentine,
    Christmas
};

const getImageByKey = (key) => {
    return images[key];
};

export default getImageByKey;