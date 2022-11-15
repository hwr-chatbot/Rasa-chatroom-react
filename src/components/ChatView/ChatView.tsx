import "./ChatView.css"
import {ChatMessage} from "../../types/ChatMessage";
import mika from "../../assets/mika.png"
type ChatViewProps = {
    history: ChatMessage[]
}

export default function ChatView(props: ChatViewProps) {
    return (
        <ul className="chatview-history">
            {props.history.map((element: ChatMessage, index: number) =>
                <li key={index}
                    className={element.fromBot ? "chatview-bot-message" : "chatview-me-message"}>
                    <span className="chatview-chatbubble">{element.text} <img src={mika} width={25} height={25} alt="Mika-Bot"/></span></li>
            )}
        </ul>
    )
}