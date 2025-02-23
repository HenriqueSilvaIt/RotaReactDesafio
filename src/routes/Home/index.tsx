import { Outlet } from "react-router-dom";
import Header from "../../components/principalHeader";

export default function Home() {
    return(
        <>
        <Header/>
        <Outlet/>
        </>
        
        
    );
}