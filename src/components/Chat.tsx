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
		text: 'Hi, my name is MIKA. Im a chatbot and I can help you get more information about the HWR. Just ask me a question, such as "What does HWR mean?" or "What degree programs are available at HWR Berlin?"',
	}
	const chatManager = new ChatManager(firstMessage)

	return (
		<div className="chat-container overflow-hidden rounded-md border-4 w-5/12 h-3/5 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
			<div className="chatview-container">
				<ChatView history={chatManager.getHistory()} />
			</div>
			<div className="chatbubble-container">
				<ChatBubble chatManager={chatManager} message={questions[0]} />
				<ChatBubble chatManager={chatManager} message={questions[1]} />
				{/* <ChatBubble chatManager={chatManager} message={questions[2]} /> */}

			</div>
			<div className="chatinput-container">
				<FeedbackModal></FeedbackModal>
				<ChatInput chatManager={chatManager} />
				<HelpModal></HelpModal>
			</div>
		</div>
	)
}
