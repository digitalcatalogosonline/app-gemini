"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import style from "./page.module.css";


export default function Home() {
    const [data, setData] = useState([]);
    const [dataToRender, setDataToRender] = useState("")
    const [inputValue, setInputValue] = useState("");
    const [active, setActive] = useState(false)
    const [loading, setLoading] = useState(false)

    const stylesTextArea =
        { resize: "none", height: 80, border: "none", outline: active ? "none" : "none", flexGrow: "1", padding: 10 }
    const btnSubmit =
        { flexGrow: ".2", maxWidth: 50, height: 50, borderRadius: "100%", border: "none", background: "#222", color: "white", }

    const disabled = loading ? {
        background: "#7d7a7a", color: "#fff", cursor: "not-allowed", pointerEvents: "none"
    } : {}

    async function handleOnClick(e) {
        try {
            e.preventDefault();
            const value = inputValue;
            setLoading(true)
            const req = await fetch(`/api`, { method: "POST", body: JSON.stringify({ prompt: dataToRender + value }), headers: { "Content-Type": "application/json" } });
            const res = await req.json()
            const outputString = res.result.replace(/<p[^>]*>.*?<\/p>/g, '')
            setData(prev => [...prev, [value, outputString]])
            setDataToRender(prev => prev + `<p style= "background-color: #cbc; padding: 20px;width: fit-content; font-weight: 900;border-radius: 20px;text-align: center,text-wrap: wrap">${value}</p>` + outputString)
            console.log(data)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            console.log(error.message)
            alert(error.message)

        }
    };
    useEffect(() => {
        setDataToRender(prev => prev.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))


    }, [data])

    return (
        <>
            <div style={{ width: "80%", height: "60vh", margin: "0 auto", background: "#ddd", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", overflowY: !loading ? "auto" : "hidden", position: "relative" }}>
                <pre style={{ whiteSpace: "pre-wrap", fontSize: "1rem", filter: !loading ? "none" : "blur(5px)" }} dangerouslySetInnerHTML={{ __html: dataToRender }}></pre>
                <Image src="/watch-loader.svg" alt="" width={100} height={100} style={{ display: !loading ? "none" : "inline", position: "fixed", left: "50%", top: "50%", transform: "translate(-50%,-50%)" }} />
            </div>

            <div style={{ borderRadius: "20px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "4px 4px 10px 4px #ccc", width: "80%", background: "#f8f4f2", padding: "20px", position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
                <textarea style={stylesTextArea} onChange={(e) => setInputValue(e.currentTarget.value)} onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)} />
                <input className={style.button_submit} type="submit" value={"send"} style={{ ...btnSubmit, ...disabled }} onClick={(e) => handleOnClick(e)} />
            </div >
        </>
    );
}
