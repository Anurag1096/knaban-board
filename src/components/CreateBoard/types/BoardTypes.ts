import { CardsProps } from "@/components/Cards/types";


export interface Board{
     id:string,
    name:string,
    cards:CardsProps[],
    createdAt: number,
}
export interface BoardTypes{
    id:string,
    name:string;
    columns:number;
    createdAt:number;
}