import Styles from "@/components/Button/Button.module.css"

interface ButtonState{
    name:string;
}

export const ButtonPrimary=({name}:ButtonState)=>{
    return (<button className={Styles["btn--primary"]}>{name}</button>)
}


export const ButtonSecondary=({name}:ButtonState)=>{
    return(<button className={Styles["btn--secondary"]}>{name}</button>)
}