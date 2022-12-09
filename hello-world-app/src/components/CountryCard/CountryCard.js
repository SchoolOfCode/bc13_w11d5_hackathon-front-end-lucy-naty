import React from 'react'
import {useContext} from "react"
import "./CountryCard.css"
<<<<<<< HEAD
import { countryContext } from '../App/MainApp'

=======
import {countryContext} from "../App/MainApp.js"
>>>>>>> refs/remotes/origin/main


export function CountryCard({country,image }) {

    const Thing1 = useContext(countryContext)
    
    return (
        <div className="container">
            <h1>{country}</h1>
            <img className="foto" src={image} alt="country" />
        </div>
    )
}