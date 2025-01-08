import { GoogleGenerativeAI } from "@google/generative-ai";
import { NextResponse } from "next/server";


export async function GET(request, { params }) {
    try {
        const { prompt } = await params
        const genAI = new GoogleGenerativeAI(process.env.API_KEY);
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent(prompt);
        console.log(result.response.text());

        return NextResponse.json(result.response.text())

    } catch (error) {
        console.log(error)
    }

}



