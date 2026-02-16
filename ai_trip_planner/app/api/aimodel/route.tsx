import { NextRequest, NextResponse } from "next/server"
import OpenAI from "openai"
import { PROMPT } from "./prompts"
import { json } from "stream/consumers"

const openai = new OpenAI({
  baseURL: "https://openrouter.ai/api/v1",
  apiKey: process.env.OPEN_ROUTER_API_KEY,
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
            model: "arcee-ai/trinity-mini:free",
            response_format: { type: 'json_object'},
            messages: [
                {
                    role: "system",
                    content: PROMPT,
                },
                ...messages
                ],
            })
            console.log(completion.choices[0].message)
            const message = completion.choices[0].message
            return NextResponse.json(JSON.parse(message.content??""))
        }
        catch(e){
            return NextResponse.json(e)
        }
}