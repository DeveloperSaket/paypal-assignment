import './index.css';
import ItemList from "../../Constant/itemList";
import React, { useState } from 'react';
import Carousel from "../Carousel";
import { current, next, prev } from "./utility";

function ProductList() {
    const [category, selectCategory] = useState('fruits');
    const [currentList, updateList] = useState(current(ItemList.filter(i => i.category === 'fruits')));
    return (
        <div className="Container">
            <header className="Category">
                <select onChange={(e) => {
                    selectCategory(e.target.value);
                    updateList(current(ItemList.filter(i => i.category === e.target.value)))
                }}>
                    <option value='fruits'>Fruits</option>
                    <option value='vagitable'>Vagitable</option>
                </select>
            </header>
            <div className="Carousel">
                <div>
                    <button onClick={() => {
                        const itemObj = prev(ItemList.filter(i => i.category === category), currentList.pointer);
                        if (itemObj) {
                            updateList(itemObj)
                        }
                    }}>Prev</button>
                </div>
                <Carousel itemObj={currentList} />
                <div>
                    <button onClick={() => {
                        const itemObj = next(ItemList.filter(i => i.category === category), currentList.pointer);
                        if (itemObj) {
                            updateList(itemObj)
                        }
                    }}>Next</button>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
