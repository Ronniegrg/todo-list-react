import React, { useState } from "react";

function ToDoItem ( props ) {
    const [ item, setItem ] = useState( "" );

    function handleChange () {
        setItem()
    }
    
    return (
         <li onClick={handleChange} value={props.text}>{ props.text }</li>
    )
}

export default ToDoItem;