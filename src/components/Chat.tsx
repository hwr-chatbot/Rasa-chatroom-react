import { useState } from "react"
import ChatInput from "./ChatInput/ChatInput"
import ChatView from "./ChatView/ChatView"
import { ChatMessage } from "../types/ChatMessage"
import "./Chat.css"
import ModalWindow from "./Modal/ModalWindow"

type ChatProps = {
	host: string
	port: number
	useHttps: boolean
}
type ChatState = {
	history: ChatMessage[]
}

export default function Chat({}: ChatProps) {
	const firstMessage: ChatMessage = {
		fromBot: true,
		text: 'Hi, mein Name ist MIKA. Ich bin ein Chatbot und ich kann dir dabei helfen, mehr Informationen über die HWR zu bekommen. Stelle mir dafür einfach eine Frage, wie z.B. "Was bedeutet HWR?" oder "Welche Studiengänge gibt es an der HWR Berlin?"',
	}
	const [state, setState] = useState<ChatState>({ history: [firstMessage] })
	return (
		<div className="chat-container">
			<div className="chatview-container">
				<ChatView history={state.history} />
			</div>
			{/* <div className="container1">
				<div className="item1">Wie kann ich mich an der HWR anmelden?</div>
				<div className="item2">Wo liegt die HWR?</div>
				<div className="item3">Wofür steht HWR?</div>
			</div> */}
			<div className="chatinput-container">
				<div></div>
				<ChatInput history={state.history} updateHistoryFunction={setState} />
				<ModalWindow></ModalWindow>
			</div>
		</div>
	)
}
