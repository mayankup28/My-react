import React from 'react'
// import { useParams } from 'react-router-dom'
function Product({name,symbol}) {
    return (
        <>
        <div>{name}</div>
        <div>{symbol}</div>
        </>
    )
}

export default Product