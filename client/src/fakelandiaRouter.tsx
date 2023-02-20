import { Route,Routes } from "react-router-dom";
import Home from "./home";
import MisDeamenour  from "./misdemeaner";
import Confess from "./confess";

export const FakelandiaRouter:React.FC=() => <>
<Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/misdemeanour' element={<MisDeamenour/>}/>
    <Route path='/confess' element={<Confess/>}/>    
</Routes>
</>