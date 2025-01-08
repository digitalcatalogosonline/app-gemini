"use client"
import { useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [active, setActive] = useState(false)

  const stylesTextArea =
    { resize: "none", height: 80, border: "none", outline: active ? "none" : "none", flexGrow: "1", padding: 10 }
  const btnSubmit =
    { flexGrow: ".2", maxWidth: 50, height: 50, borderRadius: "100%", border: "none", background: "#ccc" }

  async function handleOnClick(e) {
    try {
      e.preventDefault();
      const value = inputValue;
      const req = await fetch(`api/${value}`);
      const res = await req.json()
      setData(res)

    } catch (error) {
      alert(error)
    }
  };
  useEffect(() => {
    setData(prev => prev.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>"))


  }, [data])

  return (
    <>
      <div style={{ width: "80%", height: "65vh", margin: "0 auto", background: "#ddd", padding: "20px", border: "1px solid #ccc", borderRadius: "10px", overflowY: "auto" }}>
        <pre style={{ whiteSpace: "pre-wrap", fontSize: "1.1rem" }} dangerouslySetInnerHTML={{ __html: data }}></pre>
      </div>

      <div style={{ borderRadius: "20px", display: "flex", alignItems: "center", gap: "10px", boxShadow: "4px 4px 10px 4px #ccc", width: "80%", background: "#f8f4f2", padding: "20px", position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
        <textarea style={stylesTextArea} onChange={(e) => setInputValue(e.currentTarget.value)} onMouseDown={() => setActive(true)} onMouseUp={() => setActive(false)} />
        <input type="submit" value={"send"} style={btnSubmit} onClick={(e) => handleOnClick(e)} />
      </div >
    </>
  );
}
