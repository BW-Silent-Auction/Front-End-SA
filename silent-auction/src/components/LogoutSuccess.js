import React, { useEffect } from "react";


const LogoutSuccess = (props) => {

    useEffect(() => {
        localStorage.removeItem("token");
    })

    const submitHandle = () => {
        props.history.push("/register/")
    }

    return(
        <>
        <h1>Logout Success!</h1>
        <form onSubmit={submitHandle}>
            <button type="submit">Go Back to Register</button>
        </form>
        </>
    )
}

export default LogoutSuccess;