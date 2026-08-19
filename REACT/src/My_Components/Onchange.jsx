// onChange = event handler used primarily with form elements
//             ex. <input>, <textarea>, <select>, <radio>
//             Triggers a function every time the value of the input changes


import React,{useState} from 'react';

function Onchange(){
    const[name,setName] = useState("");
    const[quantity,setQuantity] = useState(1);
    const[comment,setComment] = useState("");
    const[payment,setPayment] = useState("");
    const[shipping,setShipping] = useState("");

    function handleNameChange(e){
        setName(e.target.value);
    }

    function handleQuantityChange(e){
        setQuantity(e.target.value);
    }

    function handleCommentChange(e){
        setComments(e.target.value);
    }

    function handlePaymentChange(e){
        setPayment(e.target.value);
    }

    function handleShippingChange(e){
        setShipping(e.target.value);
    }

    return(
        <div>
            <input value = {name} onChange = {handleNameChange}></input>
            <p>Name : {name}</p>

            <input value = {quantity} onChange = {handleQuantityChange} type = "number"></input>
            <p>Quantity : {quantity}</p>

            <textarea value = {comment} onChange = {handleCommentChange}></textarea>
            <p>Comment: {comment}</p>

            <select value = {payment} onChange = {handlePaymentChange}>
                <option value = " " >Select an option</option>
                <option value = "visa">visa</option>
                <option value = "MasterCard">MasterCard</option>
            </select>

            <p>Payment : {payment}</p>

            <label><input type="radio" value = "Pick up" checked = {shipping==="Pick up"} onChange = {handleShippingChange}></input>Pickup</label>
            <label><input type="radio" value = "Delivery" checked = {shipping==="Delivery"} onChange = {handleShippingChange}></input>Delivery</label>
            <p>Shipping : {shipping}</p>
        </div>
    );
}

export default Onchange