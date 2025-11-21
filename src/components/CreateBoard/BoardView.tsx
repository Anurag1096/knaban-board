// this will receive an column array [{},{},{}] which contains object for every task to do.

import Cards from "../Cards/Cards"
import { Column } from "./types/BoardTypes"
import { CardsProps } from "../Cards/types"
export default function BoardView({columns}:{columns:Column}){
    return(<div className="flex flex-col gap-4" key={columns.columnId}>
      
        {columns.cards.map((card:CardsProps)=>{
            return(<Cards key={card.tagName} tagName={card.tagName}
                headings={card.headings}
                discription={card.discription}
                cardId={card.cardId}/>)
        })}


    </div>)
}