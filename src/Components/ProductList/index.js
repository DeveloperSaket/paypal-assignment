import './index.css';
import ItemList from "../../Constant/itemList";
import React, { useState } from 'react';

function ProductList() {
    const [category, selectCategory] = useState('fruits');

    return (
        <div className="Container">
            <header className="Category">
                <select onChange={(e) => selectCategory(e.target.value)}>
                    <option value='fruits'>Fruits</option>
                    <option value='vagitable'>Vagitable</option>
                </select>
            </header>
            <div className="Carousel">
                {ItemList.filter(i => i.category === category).map(i => <div className='test-center'><div>{i.name}</div>{i.price}<div></div> </div>)}
            </div>
        </div>
    );
}

export default ProductList;
