// import { useState } from "react";
import { Link } from "react-router-dom"
import HeaderAppBar from "../components/HeaderAppBar"

export default function Home(){
    return(
        <div>
            <HeaderAppBar/>
            <Link to="/Trial">
            Hi
                <button> try it </button>
            </Link>
        </div>
    )
}