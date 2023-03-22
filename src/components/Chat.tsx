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
            <div className="chatview-container">
                <ChatView history={state.history}/>
            </div>
            {/* <div className="container1">
                <div className="item1">Wie kann ich mich an der HWR anmelden?</div>
                <div className="item2">Wo liegt die HWR?</div>
                <div className="item3">Wofür steht HWR?</div>
            </div> */}
            <div className="chatinput-container">
                <ChatInput history={state.history} updateHistoryFunction={setState}/>
            </div>
        </div>
    )
}