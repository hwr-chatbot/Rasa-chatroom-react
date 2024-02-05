import { useState } from "react"
import ChatInput from "./ChatInput/ChatInput"
import ChatView from "./ChatView/ChatView"
import { ChatMessage } from "../types/ChatMessage"
import "./Chat.css"
import ModalWindow from "./Modal/ModalWindow"
import { ChatManager } from "../ChatManager"
import ChatBubble from "./ChatBubble/ChatBubble"

type ChatProps = {
	host: string
	port: number
	useHttps: boolean
}

export default function Chat({}: ChatProps) {
	const firstMessage: ChatMessage = {
		fromBot: true,
		text: 'Hi, mein Name ist MIKA. Ich bin ein Chatbot und ich kann dir dabei helfen, mehr Informationen über die HWR zu bekommen. Stelle mir dafür einfach eine Frage, wie z.B. "Was bedeutet HWR?" oder "Welche Studiengänge gibt es an der HWR Berlin?"',
	}
	const chatManager = new ChatManager(firstMessage)
	return (
		<div className="chat-container">
			<div className="chatview-container">
				<ChatView history={chatManager.getHistory()} />
			</div>
			<div className="container1">
				<ChatBubble chatManager={chatManager} message="Wofür steht HWR?" />
				<ChatBubble chatManager={chatManager} message="Wo liegt die HWR?" />
				<ChatBubble
					chatManager={chatManager}
					message="Wie kann ich mich an der HWR anmelden?"
				/>
			</div>
			<div className="chatinput-container">
				<div></div>
				<ChatInput chatManager={chatManager} />
				<ModalWindow></ModalWindow>
			</div>
		</div>
	)
}
