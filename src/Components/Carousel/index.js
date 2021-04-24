import './index.css';
import PropTypes from "prop-types";

function Carousel({ itemObj }) {
    const { list } = itemObj;
    return (
        <>
            {list.map(i => <div className='test-center'><div>{i.name}</div>{i.price}<div></div> </div>)}
        </>
    );
}

Carousel.propTypes = {
    itemObj: PropTypes.shape().isRequired
}

export default Carousel;
