import React from "react";
import './index.css';

const List = (props) => {



    return(
        <>

            <li className="delete">{props.text}
            <button  className="btn" onClick={() =>{
                props.onSelect(props.id)
            }}>Delete</button>
            </li>
        </>

    )
}

export default List;