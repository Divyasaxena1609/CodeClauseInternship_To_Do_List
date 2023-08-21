import React, { useState } from "react";
import List from './List';
import './index.css';

const ToDo = () => {

    const[inputList, SetInputList] = useState("");
    const[item, SetItem] = useState([]);


    const ItemEvent = (event) => {
        SetInputList(event.target.value);
    } 

    const listOfItems = () => {
             
        SetItem((oldItem) => {
            return(
                [...oldItem, inputList]
            );
         });

         SetInputList("");
    };

    const DeleteItem = (id) => {
        console.log("click");

        SetItem((oldItem) =>{
            return oldItem.filter((arrElem, index) =>{
                return index !== id;
            })
        })
    }

     
    

    return(
        <>
            <div className="border"> 
             <h1 className="heading">TO - DO - LIST</h1>
             <hr/>
             <hr/>
             <div className="input">
             <input type="text" placeholder="Enter the Item" onChange={ItemEvent} value={inputList}/>
             <br/>  


            <button onClick={listOfItems}>Create Task</button>

             </div>

               {
                 item.map((itemval, index)  => {
                     return(
                        <List
                        key = {index}
                        id = {index}
                        text={itemval} 
                        onSelect={DeleteItem}
                        />
                     )
                 })
               }
            </div>
        </>
    )
}

export default ToDo;