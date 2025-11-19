interface BoardProps{
    name:string;
}
export  function createBoard({name}:BoardProps){
    return{
    id: crypto.randomUUID(),
    name,
    columns: [],
    createdAt: Date.now(),
    }
}