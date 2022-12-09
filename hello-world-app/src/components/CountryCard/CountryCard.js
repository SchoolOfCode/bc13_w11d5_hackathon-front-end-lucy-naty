import React from 'react'

export function CountryCard({country}) {
    
    return (
        <div key={country.key}>
            <h1>{country.country}</h1>
            <img src={country.image} alt="country" />

        </div>
    )
}