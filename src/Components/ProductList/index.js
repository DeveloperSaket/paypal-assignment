import './index.css';
import ItemList from "../../Constant/itemList";

function ProductList() {
    return (
        <div className="Container">
            <header className="Category">
                <select>
                    <option>Fruits</option>
                    <option>Vagitable</option>
                </select>
            </header>
            <div className="Carousel">
                {ItemList.filter(i => i.category === 'fruits').map(i => <div>{i.name}</div>)}
            </div>
        </div>
    );
}

export default ProductList;
