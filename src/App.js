import React from "react"
import Card from './card.js'
import './App.css'
import data from './data.js'

export default function App(){
    const cardi = data.map(items =>{
        return (
            <Card 
                img = {items.coverImage} 
                title1 = {items.country}
                title2 = {items.Site}
                date = {items.Dates}
                description = {items.Desc}
            />           
        )
    })
    return (
        <section className = "Cards">
            {cardi}
        </section>      
    )
}