import { Outlet } from "react-router-dom";
import Header from "./header";
import Home from "./home";

const MainLayout:React.FC = () => <>
<Header/>
<main>
    <Outlet/>
</main>
</>
export default MainLayout;
