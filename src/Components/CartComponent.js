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
                price: '$100.00',
                stock: "8"
            },
            {
                id: 2,
                title: 'Laptop',
                description: 'Equipo Portatil',
                price: '$20,000.00',
                stock: "5"
            },
            {
                id: 3,
                title: 'Monitor',
                description: 'Monitor de 30 pulgadas',
                price: '$15,000.00',
                stock: "7"
            },
            {
                id: 4,
                title: 'MousePad',
                description: 'MousePad ergonómico',
                price: '$500.00',
                stock: "18"
            }
        ]
    }


    render(){

        const dataItemsProductsList = () => {
            let items = []

            for(let index of this.MyItems){
                let item = <ItemsProductList  id={index.id} title={index.title} description={index.description} price={index.price} stock={index.stock} />
                items = [...items, item]
            }
            return items
        }
        
        return(
            <div>
                <br></br>
                <h2>Lista de Productos</h2>
                <br></br>
                {dataItemsProductsList()}
            </div>
        )
    }

}