import styles from "../Shopping_List/Shopping.module.css";
import React, {useState} from "react";

export default function ShoppingList() {

    const [items, setItems] = useState([]);

    const onRemoveItem = (itemToRemove) => {
      const newItems = items.filter((item) => {
        return item !== itemToRemove;
      });
      setItems(newItems);
    }

    const onSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const input = form.item;
        const newItems = [...items, input.value];
        setItems(newItems);
        form.reset();
      }
    

    return (
        <div>
        <h1>Alex's Shopping List</h1>
        <div className={styles.shoppingContainer}>
          <h2>Items to Buy</h2>  
          <form onSubmit={onSubmit}>
            <input
            type="text"
            name="item"
            placeholder="Add a new Item"
            required />
            <button className={styles.addBtn}>Add</button>
          </form>
          <ul>
          {items.map((item, index) => (
            <Item onRemoveItem={onRemoveItem} key={item + index} item={item} />
          ))}
          </ul>
        </div>
        </div>
    );
}

function Item({ item, onRemoveItem }) {
    return (
      <li>
        {item}
        <button className={styles.delete} onClick={() => onRemoveItem(item)}>x</button>
      </li>
    );
  }
