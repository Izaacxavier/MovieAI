import {Routes, Route} from "react-router-dom"
import { Details } from "../Pages/details"
import { Home } from "../Pages/home"


export function AppRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/details/:id" element={<Details/>}/>
        </Routes>
    )
}