import { CardsProps } from "@/components/Cards/types";

export interface Column{
   
    cards:CardsProps[];

}
export interface Board{
     id:string,
    name:string,
    columns:Column,
    createdAt: string,
}
export interface BoardTypes{
    id:string,
    name:string;
    columns:number;
}