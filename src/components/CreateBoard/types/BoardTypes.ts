import { CardsProps } from "@/components/Cards/types";


export interface Board{
     id:string,
    name:string,
    cards:CardsProps[],
    createdAt: string,
}
export interface BoardTypes{
    id:string,
    name:string;
    columns:number;
}