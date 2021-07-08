import React, {Component} from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons'


export default class CarWidget extends Component {

        render(){
            return (
                <div>
                    <FontAwesomeIcon icon={faShoppingCart} /> Mi Carrito
                </div>
            )
        }
}