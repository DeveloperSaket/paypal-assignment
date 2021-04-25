import './index.css';
import PropTypes from "prop-types";

function Carousel({ itemObj }) {
    const { list } = itemObj;
    return (
        <>
            {list.map((i, index) => {
                return (<div className={index !== 1 ? 'card' : 'card-selected'}>
                    <div className='cardImage'></div>
                    <div>{i.name}</div>
                    {i.price}
                </div>)
            }
            )}
        </>
    );
}

Carousel.propTypes = {
    itemObj: PropTypes.shape().isRequired
}

export default Carousel;
