import PropTypes from 'prop-types';
import styles from './OptionSize.module.scss';
import clsx from 'clsx';

const OptionSize = ({ sizes, currentSize, setCurrentSize }) => {
    return (
        <div className={styles.sizes}>
            <h3 className={styles.optionLabel}>Sizes</h3>
            <ul className={styles.choices}>
                {sizes.map(size => (
                    <li key={size.name}>
                        <button
                            type="button"
                            onClick={() => setCurrentSize(size.name)}
                            className={clsx(size.name === currentSize && styles.active)}
                        >
                            {size.name}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

OptionSize.propTypes = {
    sizes: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            additionalPrice: PropTypes.number,
        })
    ).isRequired,
    currentSize: PropTypes.string.isRequired,
    setCurrentSize: PropTypes.func.isRequired,
};

export default OptionSize;
