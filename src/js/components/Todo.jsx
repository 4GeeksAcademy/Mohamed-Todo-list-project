import React, { useState } from "react";
import "../../styles/index.css";

function Todo() {
    const [inputText, setInputText] = useState("");
    const [items, setItems] = useState([]);

    function handleChange(event) {
        const newValue = event.target.value;
        setInputText(newValue);
    }

    function addItem() {
        setItems((prevItems) => {
            return [...prevItems, inputText];
        });
        setInputText("");
    }

    return (
        <div className="todo-container">
            <h1 className="todo-header">Todo List</h1>
            <div className="todo-input-container">
                <input
                    onChange={handleChange}
                    type="text"
                    placeholder="Type your todos"
                    value={inputText}
                    className="todo-input"
                />
                <button onClick={addItem} type="submit" className="todo-button">
                    Save Todo
                </button>
            </div>
            <ul className="todo-list">
                {items.map((item, index) => (
                    <li key={index} className="todo-item">
                        {item}
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Todo;