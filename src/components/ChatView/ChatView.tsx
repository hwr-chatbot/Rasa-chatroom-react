import "./ChatView.css"
import {ChatMessage} from "../../types/ChatMessage";
import mika from "../../assets/mika.png"
import {useEffect, useRef} from "react";

type ChatViewProps = {
    history: ChatMessage[]
}

export default function ChatView(props: ChatViewProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: 'smooth'})
    }

    useEffect(() => {
        scrollToBottom();
    })

    return (
        <ul className="chatview-history">
            {props.history.map((element: ChatMessage, index: number) =>
                <li key={index}
                    className={element.fromBot ? "chatview-bot-message" : "chatview-me-message"}>
                    <span className="chatview-chatbubble">{element.fromBot ?
                        <img src={mika} width={25} height={25} alt="Mika-Bot"/> : ""}{element.text} </span></li>
            )}
            <li>
                <div ref={messagesEndRef}></div>
            </li>
        </ul>
    )
}
