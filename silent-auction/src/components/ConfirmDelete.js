import React from "react";
import axios from 'axios';

const ConfirmDelete = (props) => {
    console.log(props)
    const handleDelete = () => {
        axios
        .delete(`https://bw-silent-auction.herokuapp.com/api/products/${props.id}`)
        .then(res => {
            console.log(res.data);
        })
        .catch(err => console.log(err))
    }

    const handleCancel = () => {
        props.history.push("/seller-item-list/")
    }

    return(
        <>
        <h1>Are you sure you want to delete?</h1>
            <button 
            type="submit" 
            onClick={handleDelete}
            >Delete</button>
            <button onClick={handleCancel}>Go Back</button>
        </>
    )
}

export default ConfirmDelete;