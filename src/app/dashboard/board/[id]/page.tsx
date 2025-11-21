'use client'
import BoardView from "@/components/CreateBoard/BoardView"
import { useAppSelector } from "@/data/store/hooks"


export default function Home(){

const BoardData=useAppSelector(state=>state.column)
    
return(<div className="flex justify-between" >
{BoardData.map((columns)=>{
        return (
        <div key={columns.id} className="flex flex-col  ">
            <div className="text-amber-100 font-extrabold text-3xl">{columns.name}</div>
            <BoardView columns={columns.columns}/>
            </div>
            )
    })})
</div>
)}