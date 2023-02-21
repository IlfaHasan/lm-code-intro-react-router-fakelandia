import { Route,Routes } from "react-router-dom";
import Home from "./home";
import MisDeamenour  from "./misdemeaner";
import Confess from "./confess";
import NotFound from "./not_found";
import MainLayout from "./main_layout";

export const FakelandiaRouter:React.FC=() => <>
<Routes>
<Route path='/' element={<MainLayout/>}/>
    <Route index element={<Home/>}/>
    <Route path='misdemeanour' element={<MisDeamenour/>}/>
    <Route path='confess' element={<Confess/>}/>
    <Route path='*' element={<NotFound/>}/>    
</Routes>
</>