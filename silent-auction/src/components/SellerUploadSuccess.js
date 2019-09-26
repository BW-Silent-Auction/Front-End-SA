import React from "react";


const UploadItemSuccess = (props) => {

    const submitHandle = () => {
        props.history.push("/seller-item-list/")
    }

    return(
        <>
        <h1>Item successfully added!</h1>
        <form onSubmit={submitHandle}>
            <button type="submit">Go Back to List</button>
        </form>
        </>
    )
}

export default UploadItemSuccess;