interface BoardProps{
    name:string;
}
export const CreateBoard=({name}:BoardProps)=>{
    return{
    id: crypto.randomUUID(),
    name,
    columns: [],
    createdAt: Date.now(),
    }
}