import React from "react";


const ItemEditSuccess = (props) => {

    const submitHandle = () => {
        props.history.push("/seller-item-list/")
    }

    return(
        <>
        <h1>Item successfully edited!</h1>
        <form onSubmit={submitHandle}>
            <button type="submit">Go Back to List</button>
        </form>
        </>
    )
}

export default ItemEditSuccess;