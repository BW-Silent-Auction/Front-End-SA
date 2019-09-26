import React from "react";
import axiosWithAuth from '../utils/axiosWithAuth';

const ConfirmDelete = (props) => {
    console.log(props)
    const handleDelete = () => {
        axiosWithAuth()
        .delete(`/api/products/${props.match.params.id}`)
        .then(res => {
            console.log(res.data);
            props.history.push("/seller-item-list/")
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