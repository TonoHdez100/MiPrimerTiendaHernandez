import React from "react"
import { useEffect, useState } from "react"

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";

import 'bootstrap/dist/css/bootstrap.min.css';
import { counter } from "@fortawesome/fontawesome-svg-core";


export default function ItemCount(props){

    const[count, setCount] = useState(parseInt(props.initial))
    const limit = parseInt(props.stock) 
    
    

    const incrementItem = (() => {
        if(count < limit){
            setCount(count + 1);
        }
    })

    const decrementItem = (() => {
        if(count > 1){
            setCount(count - 1);
        }
    })



    return(
        <div>
            <br></br>
            <Form>

                <Form.Row>

                    <Form.Group as={Col}>
                        <Button className="float-right" variant="primary" onClick={decrementItem}>-</Button>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Form.Control 
                            type="text" 
                            value={count}
                        />
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Button variant="primary" onClick={incrementItem}>+</Button>
                    </Form.Group>

                    <Form.Group as={Col}>
                        <Button className="float-left" variant="primary">Add to Car</Button>
                    </Form.Group>

                </Form.Row>

            </Form>
            
            
            
        </div>
    )



}