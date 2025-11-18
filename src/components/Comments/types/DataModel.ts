export interface CommentProps{
    id:string;
    cardId:string;
    user:{
        id:string;
        name:string;
        avatar?:string;
    },
    message:string;
    createdAt:string;
}