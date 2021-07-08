import React, {Component} from 'react'
import ItemsProductList from './ItemsProductList'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default class CartComponent extends Component {

    constructor(props){
        super(props)
        this.MyItems = [
            {
                id: 1,
                title: 'Mouse',
                description: 'Mouse Inalambrico',
                price: '100'
            },
            {
                id: 2,
                title: 'Laptop',
                description: 'Equipo Portatil',
                price: '20000'
            },
            {
                id: 3,
                title: 'Monitor',
                description: 'Monitor de 30 pulgadas',
                price: '15000'
            },
        ]
    }


    render(){

        const dataItemsProductsList = () => {
            let items = []

            for(let index of this.MyItems){
                let item = <ItemsProductList  id={index.id} title={index.title} description={index.description} price={index.price} />
                items = [...items, item]
            }
            return items
        }
        
        return(
            <div>
                <h1><FontAwesomeIcon icon={faShoppingCart} /> My Cart</h1>
                {dataItemsProductsList()}
            </div>
        )
    }

}