import { useState } from "react"
import ChatInput from "./ChatInput/ChatInput"
import ChatView from "./ChatView/ChatView"
import { ChatMessage } from "../types/ChatMessage"
import "./Chat.css"
import HelpModal from "./Modal/HelpModal"
import { ChatManager } from "../ChatManager"
import ChatBubble from "./ChatBubble/ChatBubble"
import { questions } from "../assets/questions"
import FeedbackModal from "./Modal/FeedbackModal"

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
			<div className="chatbubble-container">
				<ChatBubble chatManager={chatManager} message={questions[0]} />
				<ChatBubble chatManager={chatManager} message={questions[1]} />
				<ChatBubble chatManager={chatManager} message={questions[2]} />
			</div>
			<div className="chatinput-container">
				<FeedbackModal></FeedbackModal>
				<ChatInput chatManager={chatManager} />
				<HelpModal></HelpModal>
			</div>
		</div>
	)
}
