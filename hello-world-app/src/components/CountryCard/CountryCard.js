import React from 'react'
import {useContext} from "react"
import "./CountryCard.css"



export function CountryCard({country,image }) {

    const Thing1 = useContext(countryContext)
    
    return (
        <div className="container">
            <h1>{country}</h1>
            <img src={image} alt="country" />
        </div>
    )
}