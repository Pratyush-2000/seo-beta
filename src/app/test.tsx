"use client"
import {useEffect} from "react";

const Test= ()=>{
    useEffect(() => {
        (window as any).clarity("set", "subdomain", "beta")
    }, []);
    return <></>
}

export default Test
