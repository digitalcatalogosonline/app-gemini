"use client"
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import CardApp from './components/Card';
import Image from 'next/image';
import { Box } from '@mui/material';

export default function Home() {

    return (
        <Box sx={{ paddingInline: { sm: 0, md: 10, xl: 20 }, display: "flex", flexDirection: "column", gap: 5 }}>
            <Paper elevation={2} sx={{ width: "100%", height: "400px", margin: "0 auto", position: "relative" }}><Image src={"/imagen_ia.png"} style={{ width: "100%", height: "100%", objectFit: "cover", filter: "brightness(.15)" }} width={500} height={500} alt="" priority /><Typography variant='h5' sx={{ position: "absolute", left: "50%", top: "50%", transform: "translate(-50%,-50%)", color: "#ddd", fontWeight: "900", fontFamily: "cursive", textAlign: "center" }}> Simple app para chatear con gemini IA y convertir archivos a pdf</Typography></Paper>

            <Box sx={{ display: 'flex', flexWrap: "wrap", justifyContent: "center", gap: 10 }}>
                <CardApp appUrl={"/apps/chat-gemini"} tittle={"chatea con gemini"} imageUrl={"/chat_ia.webp"} />
                <CardApp appUrl={"/apps/change-format"} tittle={"convierte a pdf"} imageUrl={"/conversion_pdf.jpeg"} />
            </Box>

            <Paper elevation={0} sx={{ background: "#ddd", padding: 5, textAlign: "center" }}>Hecho con amor por Samuel Pego figueredo</Paper>

        </Box>

    )
}