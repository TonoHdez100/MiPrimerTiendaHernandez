import React from 'react'

export default function ItemProductList(props){
    return(
        <div className="ItemProductList">
            <h2>{props.title}</h2>
            <h4>{props.description}</h4>
            <h5>{props.price}</h5>
        </div>
    )
}