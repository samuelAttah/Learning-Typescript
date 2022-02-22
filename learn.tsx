import { applyMiddleware } from "redux"

interface User{
    name: string,
    id: number,
    isHere: boolean

}

const user : User={
    name: "Samuel",
    id: 100,
    isHere: false
}

const userName = "Samuel"

const friend : string[] = ["sam", "uche", "Nma"]



interface Person extends User{
    city: {
        address: string
    }
}

const icelaw:Person ={
    name: "Odoemenam",
    id: 70,
    isHere: true,
    city:{
        address: "Loughbrough"
    }

}

let myaddress:string = icelaw?.city?.address

export const App=():any=>{
    return(
        <div>
            This is what you are born to do
        </div>
    )
    
}

export const increment =(num: number): any=>{
    return {type: "ADD NUMBER", payLoad: num}

}

export const decrement=():number=>{
    return 89
}

export const Welcome =(): JSX.Element =>{
    return(
        <div>
            Welcome to the school of functional programming
        </div>
    )
}