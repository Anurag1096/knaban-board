interface Props{
    name:string;
    count?:number;
}
function handleClick(){
    alert("Add modal will be opened")
}
export default function ColumnName({name,count=0}:Props){
    return(<div className="text-black rounded-xl border-2 bg-amber-50 m-2 p-2 font-extrabold text-3xl flex justify-between">
        <div>
            <span className="px-3 mx-2 rounded-4xl border-2 bg-blue-300">{count??""}</span>
        {name}
            </div>
        <span className="cursor-pointer" onClick={handleClick}>+</span>
    </div>)
}