import React from "react"

function PlaceHolder(props) {
    const completedStyle = {
        fontStyle :"italic",
        color : "green",
        textDecoration:"line-through"
    }
    return(
        <div className = "todo-item">  
            <input type = "checkbox" checked = {props.item.completed} onChange = {(event) => props.change(props.item.id)}/>
            <p style = {props.item.completed ? completedStyle : null}>{props.item.text} </p>
        </div>
        
    )
}

export default PlaceHolder 