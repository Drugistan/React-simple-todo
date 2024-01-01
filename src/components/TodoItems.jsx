import React from "react";


export const TodoItem = (props) => {
    return <>
        <li className="todo-items">
            <span>
                <input type="checkbox" />
                <span className="todo-item-text"> {props.name} </span>
            </span>
            <p> .... </p>
        </li>
    </>
}