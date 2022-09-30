import React from "react";
import errorImg from './image/error-404.png'
function Error(){
    return(
        <>
        <div class="img-error"> <img class="imgerror" src={errorImg} alt=" error - 404"/></div>
        </>
    )
}
export default Error;