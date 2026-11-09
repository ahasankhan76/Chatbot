import Bot from "../models/bot.model.js";
import user from "../models/user.model.js";
export const Message = async(req,res) =>{
    // console.log("Ahsan")
    try {

        // get message from frontend
        const{text} = req.body;
        console.log("user Message:",text);


        // validate message
        
        
        if(!text|| typeof text!=="string" || text.trim()==""){
            return res.status(400).json
            ({error:'Text cannot be empty'});
        }

        // save user message in database


        const userMessage=await user.create({
            sender:"user",
            text:text.trim()
        });


// predefine bot response
        
            const botResponse={
            "hello":"Hey Ahasan",
            "hi":"Hello! How can I help you",
            "what is your name":"my name is ahassan khan",
            "what is your name sir": "My name is Ahasan AI Chatbot.",
             
        "what is resume": "A resume is a summary of your education, skills and experience.",
        "what is teamwork": "Teamwork means working together to achieve a common goal.",
        "what is bca": "BCA stands for Bachelor of Computer Applications.",
        "what is india": "India is a country in South Asia. Its capital is New Delhi.",
        "what is java": "Java is an object-oriented programming language.",
        "what is python": "Python is a high-level programming language.",
        "what is html": "HTML is used to create the structure of web pages.",
        "what is css": "CSS is used to style web pages.",
        
            }


        // Normlized message
        const normalizedText = text.toLowerCase().trim();

        // generate bot reply
        const botReply= botResponse[normalizedText] || "sorry, i did not understand!!";

        // save bot response in database
        const botMessage = await Bot.create({
            sender:"bot",
            text:botReply
        });


        // return response
        return res.status(200).json({
            success: true,
            userMessage: userMessage.text,
            botMessage: botMessage.text,
        });

    } catch (error) {
        console.log("Erroe in chatbot message controller",error);
        return res.status(500).json({
            success:false,
            error:"internal serveer error"});
        
    }
};
