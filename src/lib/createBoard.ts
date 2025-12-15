interface BoardProps{
    name:string;
    colum:number;
}
export  function createBoard({name,colum}:BoardProps){
    return{
    id: crypto.randomUUID(),
    name,
    columns:colum,
    createdAt: Date.now(),
    }
}