import React from "react"
import Card from "./cards"
import data from "./data"





export default function App (){
    const cards = data.map(items => {
        return(

            <Card
            item={items}
            />
        )
    })
    return(
        <div>
            {cards}
        </div>
    )
}