import './index.css';
import PropTypes from "prop-types";
// import ReactCSSTransitionGroup from 'react-transition-group';
// import Alo from "../../asset/alo.jpg";
import getImage from "./image";

function Carousel({ itemObj, filteredList }) {
    const { list, pointer, type } = itemObj;
    const classCards = pointer % 2 === 0 ? 'card-container-' + type : 'card-container-' + type + '2';
    const classSelectedCard = pointer % 2 === 0 ? 'card-selected' : 'card-selected2';
    return (
        <div className='container'>
            <div className={classCards}>
                {list.map((i, index) => {
                    return (<div className={index !== 1 ? 'card' : classSelectedCard}>
                        <div className='cardImage'>
                            <img src={getImage(i.image)} alt={i.name} width="100%" height='100%'
                                style={{
                                    overflow: 'hidden',
                                    borderTopLeftRadius: '1em',
                                    borderTopRightRadius: '1em'
                                }} />
                        </div>
                        <div className='cardData'>
                            <div>{i.name}</div>
                            <div>$ {i.price}</div>
                        </div>
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
