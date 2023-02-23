import { Outlet } from "react-router-dom";
import Header from "./header";
import Home from "./home";

const MainLayout:React.FC = () => <>
<Header/>
<main style={{flex:'1'}}>
    <Outlet/>
</main>
</>
export default MainLayout;
