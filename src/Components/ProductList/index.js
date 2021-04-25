import './index.css';
import ItemList from "../../Constant/itemList";
import React, { useState } from 'react';
import Carousel from "../Carousel";
import { current, next, prev } from "./utility";

function ProductList() {
    const defaultCategory = 'fruits';
    const defaultList = ItemList.filter(i => i.category === defaultCategory);

    const [filteredList, setFilteredList] = useState(defaultList);
    const [currentList, updateList] = useState(current(ItemList.filter(i => i.category === 'fruits')));
    return (
        <div className="Container">
            <header className="Category">
                <select onChange={(e) => {
                    const newfilteredList = ItemList.filter(i => i.category === e.target.value);
                    setFilteredList(newfilteredList);
                    updateList(current(newfilteredList));
                }}>
                    <option value='fruits'>Fruits</option>
                    <option value='vagitable'>Vagitable</option>
                    <option value='herbs'>Herbs</option>
                </select>
            </header>
            <div className="Carousel">
                <div>
                    <button className='arrow' onClick={() => {
                        const itemObj = prev(filteredList, currentList.pointer);
                        if (itemObj) {
                            updateList(itemObj)
                        }
                    }}>&#8678;</button>
                </div>
                <Carousel itemObj={currentList} filteredList={filteredList} />
                <div>
                    <button className='arrow' onClick={() => {
                        const itemObj = next(filteredList, currentList.pointer);
                        if (itemObj) {
                            updateList(itemObj)
                        }
                    }}>&#8680;</button>
                </div>
            </div>
        </div>
    );
}

export default ProductList;
