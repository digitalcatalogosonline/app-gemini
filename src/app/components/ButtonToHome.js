"use client"
import { Button } from "@mui/material"


export default function ButtonBackHome() {

    return (<>

        <Button variant="contained" onClick={() => window.location.href = "/"}>Ir pantalla principal</Button>
    </>)
}



