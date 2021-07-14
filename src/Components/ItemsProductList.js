import React from 'react'
import ItemCount from './ItemCount';

export default function ItemProductList(props){
    return(
        <div className="ItemProductList">
            <h4>{props.title}</h4>
            <h5>{props.description} - Disponibles: {props.stock}</h5>
            <h6>{props.price}</h6>
            <ItemCount stock={props.stock} initial="1" />
        </div>
    )
}