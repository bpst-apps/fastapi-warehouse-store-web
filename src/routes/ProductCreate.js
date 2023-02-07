import { useState } from "react";
import { useNavigate } from "react-router-dom";

const BASE_URL = 'http://localhost:8000/'

export const ProductCreate = () => {
    const [name, setName] = useState([]);
    const [price, setPrice] = useState([]);
    const [quantity, setQuantity] = useState([]);
    const naviagte = useNavigate();

    const handleCreate = (event) => {
        event?.preventDefault()

        const json_string = JSON.stringify({name, price, quantity})

        const requestOptions = {
            method: 'POST',
            headers: new Headers ({
                'Content-Type': 'application/json'
            }),
            body: json_string
        }

        fetch(BASE_URL + 'product', requestOptions)
        .then(response => {
            if (!response.ok) {
                throw response
            }
        })
        .then(data =>{
            naviagte('/')
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className="new_product body">
            <div className="new_product_title title">Create a new product</div>
            <div>
                <input className="input-1" placeholder="name"
                onChange={(event) => setName(event.target.value)} />
            </div>
            <div>
                <input className="input-1" placeholder="price"
                onChange={(event) => setPrice(event.target.value)} />
            </div>
            <div>
                <input className="input-1" placeholder="quantity"
                onChange={(event) => setQuantity(event.target.value)} />
            </div>
            <button className="button-4" onClick={handleCreate}>Create Product</button>
        </div>
    )
}