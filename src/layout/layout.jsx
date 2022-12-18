import React from "react";
import { Header } from "../components/header/header";

export const MainLayout = (all)=>{
    return(
        <>
            <header>
                <Header/>
            </header>
            <main>{all.children}</main>
            <footer></footer>
        </>
    )
}