

import { NextResponse } from "next/server";
import { streamText } from "ai";
import { openai } from '@ai-sdk/openai';
export async function POST(req : Request) { 
    try {
        const {messages} = await req.json()

     

        const messagesTruncated = messages.slice(-6)
        






        


        const response = streamText({ 
            model : openai("gpt-4o"), 
           
            messages : [...messagesTruncated ]
        })


    
        return response.toDataStreamResponse();
 


        
       



    } catch(error) { 

        console.log(error)
        return NextResponse.json({error : "Internal server error"},{status : 500})
    }
}