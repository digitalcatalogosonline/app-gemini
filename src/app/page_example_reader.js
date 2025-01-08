"use client"
import { useState } from "react";

export default function Home() {
  const [data, setData] = useState("");
  const [inputValue, setInputValue] = useState("");

  async function handleOnClick(e) {
    e.preventDefault();
    const value = inputValue;
    const req = await fetch(`api/${value}`);
    const reader = req.body.getReader();
    const decoder = new TextDecoder("utf-8");
    let done = false;
    let text = '';

    while (!done) {
      const { value, done: doneReading } = await reader.read();
      done = doneReading;
      text += decoder.decode(value, { stream: true });
    }

    if (done) {
      setData(text);

    }
  };

  return (
    <>
      <div style={{ width: "50%", height: "65vh", margin: "0 auto", background: "#ddd", padding: "20px", borderRadius: "10px", overflowY: "auto" }}>
        <pre style={{ whiteSpace: "normal" }} dangerouslySetInnerHTML={{ __html: data }}></pre>
      </div>
      <div style={{ borderRadius: "20px", display: "flex", gap: "10px", boxShadow: "4px 4px 10px 4px #ccc", width: "50%", background: "#f8f4f2", padding: "20px", position: "fixed", bottom: "20px", left: "50%", transform: "translateX(-50%)" }}>
        <input type="text" style={{ border: "none", flexGrow: "1", height: "80px" }} onChange={(e) => setInputValue(e.currentTarget.value)} />
        <input type="submit" value={"enviar"} style={{ flexGrow: ".5" }} onClick={(e) => handleOnClick(e)} />
      </div >
    </>
  );
}
