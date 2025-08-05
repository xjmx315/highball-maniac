//Discover.js

import Items from "../components/Items";
import useItems from "../components/useItems";

import './Discover.css';

function Discover(){
    const {items, setItems} = useItems();
    
    return (
        <div>
            <Items selectedItems={items} setSelectedItems={setItems}/>
            <button id="discoverButton">발견!</button>
        </div>
    );
}

export default Discover;