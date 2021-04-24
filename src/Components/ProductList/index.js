import './index.css';
import ItemList from "../../Constant/itemList";
import React, { useState } from 'react';
import Carousel from "../Carousel";
import { current } from "./utility";

function ProductList() {
    const [category, selectCategory] = useState('fruits');
    console.log(current(ItemList.filter(i => i.category === category)), 'current(ItemList.filter(i => i.category === category))');
    return (
        <div className="Container">
            <header className="Category">
                <select onChange={(e) => selectCategory(e.target.value)}>
                    <option value='fruits'>Fruits</option>
                    <option value='vagitable'>Vagitable</option>
                </select>
            </header>
            <div className="Carousel">
                <Carousel itemObj={current(ItemList.filter(i => i.category === category))} />
            </div>
        </div>
    );
}

export default ProductList;
