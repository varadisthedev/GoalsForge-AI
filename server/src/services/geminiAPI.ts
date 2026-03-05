import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();
const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY
});

// console.log(process.env.GEMINI_API_KEY)

async function geminiAPIfunction(query: string): Promise<string> {
    try {
        const response = await ai.models.generateContent({
            model: "gemini-3.1-flash-lite-preview",
            contents: query,
        });
        //   console.log(response.text);
        return response.text?.toString() || "gemini didnt answer but api is working";
    }
    catch (err) {
        console.log("gemini api error: ", err)
        throw new Error("api is not working ")
    }

}

export default geminiAPIfunction;
