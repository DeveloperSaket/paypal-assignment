import './index.css';
import PropTypes from "prop-types";
// import ReactCSSTransitionGroup from 'react-transition-group';

function Carousel({ itemObj, filteredList }) {
    const { list, pointer } = itemObj;

    return (
        <div className='container'>
            <div className={pointer % 2 === 0 ? 'card-container' : 'card-container2'}>
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
        </div >
    );
}

Carousel.propTypes = {
    itemObj: PropTypes.shape().isRequired
}

export default Carousel;
