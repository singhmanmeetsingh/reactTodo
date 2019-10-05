import React from 'react'
import './ToDoItem.css';



export default function ToDoItems(props){
  return(
    <div className="ToDoItem">
            {props.list.map((l) =>
                <ul key={l.todo}>
                   <p className="ToDoItem-Text">{l.todo}</p>
                    <button  className="ToDoItem-Delete" onClick={() => props.onRemoveItem(l.todo)}>-</button>
                </ul>
            )}

    </div>
        )
}
