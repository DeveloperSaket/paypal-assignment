import './index.css';
import PropTypes from "prop-types";

function Carousel({ itemObj, filteredList, cur = 2 }) {
    const { list, pointer } = itemObj;

    return (
        <div className='container'>
            <div className='card-container'>
                {list.map((i, index) => {
                    return (<div className={index !== 1 ? 'card' : 'card-selected'}>
                        <div className='cardImage'></div>
                        <div>{i.name}</div>
                        {i.price}
                    </div>)
                }
                )}
            </div>
            <div className='card-container space-top'>
                {filteredList.map((i, index) => {
                    return (<div className={index !== pointer ? 'circle space-arround' : 'circle-filled space-arround'} />)
                }
                )}
            </div>
        </div>
    );
}

Carousel.propTypes = {
    itemObj: PropTypes.shape().isRequired
}

export default Carousel;
