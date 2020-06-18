import React from 'react';



const Char = (props) => {
    const style = {
        display: "inline-block",
        padding: "16px",
        textalign: "center",
        margin: "16px",
        border: "1px solid black"
    }
    return (
        <div style={style} onClick={props.delete}>
            {props.value}
        </div>
    )
}


export default Char;