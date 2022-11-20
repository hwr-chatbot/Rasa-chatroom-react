import {useState} from "react";
import ChatInput from "./ChatInput/ChatInput";
import ChatView from "./ChatView/ChatView";
import {ChatMessage} from "../types/ChatMessage";
import "./Chat.css"

type ChatProps = {
    host: string,
    port: number,
    useHttps: boolean
}
type ChatState = {
    history: ChatMessage[]
}

export default function Chat({}: ChatProps) {
    const [state, setState] = useState<ChatState>({history: []});
    return (
        <div className="chat-container">
            <div>
                <ChatView history={state.history}/>
            </div>
            <div className="chatinput-container">
                <ChatInput history={state.history} updateHistoryFunction={setState}/>
            </div>
        </div>
    )
}