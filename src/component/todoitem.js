import React, { useState } from 'react';

const TodoItem = ({item, handleValueChange, count}) => {

    
    const [countNew, updateValue] = useState(count);
    console.log(countNew)

    return (
        <div className="todo-item">
            <h1>{countNew}</h1>
            <button onClick={ () => updateValue(prevCount => prevCount + 1) }>+</button>
            <button onClick={ () => updateValue(prevCount => prevCount - 1) }>-</button>
            <p>{item.text}</p>
        </div>
    );
}

export default TodoItem;
