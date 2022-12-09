import React from 'react'

export function CountryCard({country,image }) {
    
    return (
        <div>
            <h1>{country}</h1>
            <img src={image} alt="country" />
        </div>
    )
}