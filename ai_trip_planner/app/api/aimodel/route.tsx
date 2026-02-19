import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { PROMPT } from "./prompts"


const openai = new OpenAI({
  baseURL: "https://api.groq.com/openai/v1",
  apiKey: process.env.GROQ_API_KEY,
})

const safeJsonParse = (text: string | null | undefined) => {
    if (!text) return null
    try{
        return JSON.parse(text)
    }catch{
        const m = text.match(/\{[\s\S]*\}/)
        if(!m) return null
        try{
            return JSON.parse(m[0])
        }catch{
            return null
        }
    }
}

export async function POST(req: NextRequest) {

    const {messages} = await req.json()    
    try{
        const completion = await openai.chat.completions.create({
        model: "llama-3.1-8b-instant",
        response_format: { type: 'json_object'},
        messages: [
            {
                role: "system",
                content: PROMPT,
            },
            ...messages
            ],
            temperature:0
        })
        console.log(completion.choices?.[0]?.message?.content)
        const message = completion.choices?.[0]?.message?.content
        const parsed = safeJsonParse(message)

        if(!parsed){
            return NextResponse.json(
                {error: 'Model did not return safe json', raw: message},
                {status:502}
            )
        }

        return NextResponse.json(parsed)
    }
    catch(e: any){
        return NextResponse.json(
            {error: e?.message ?? "Unknown Error", details: e},
            {status: 500}
        )
    }
}