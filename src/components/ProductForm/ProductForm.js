import PropTypes from 'prop-types';
import styles from './ProductForm.module.scss';
import Button from '../Button/Button';
import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';

const ProductForm = ({
    title,
    basePrice,
    sizes,
    colors,
    currentColor,
    currentSize,
    setCurrentColor,
    setCurrentSize,
    getPrice
}) => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log('SUMMARY');
        console.log('===============');
        console.log('Product:', title);
        console.log('Price:', getPrice());
        console.log('Size:', currentSize);
        console.log('Color:', currentColor);
    };

    return (
        <form onSubmit={handleSubmit}>
            <OptionSize
                sizes={sizes}
                currentSize={currentSize}
                setCurrentSize={setCurrentSize}
            />
            <OptionColor
                colors={colors}
                currentColor={currentColor}
                setCurrentColor={setCurrentColor}
            />
            <Button className={styles.button}>
                <span className="fa fa-shopping-cart" />
            </Button>
        </form>
    );
};

ProductForm.propTypes = {
    title: PropTypes.string.isRequired,
    basePrice: PropTypes.number.isRequired,
    sizes: PropTypes.array.isRequired,
    colors: PropTypes.array.isRequired,
    currentColor: PropTypes.string.isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentColor: PropTypes.func.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
    getPrice: PropTypes.func.isRequired,
};

export default ProductForm;
