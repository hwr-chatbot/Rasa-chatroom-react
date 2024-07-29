import { useState } from "react"
import ChatInput from "../../ChatInput/ChatInput"
import ChatView from "../../ChatView/ChatView"
import { ChatMessage } from "../../../types/ChatMessage"
import "./Chat.css"
import HelpModal from "../../Modal/HelpModal"
import { ChatManager } from "../../../ChatManager"
import ChatBubble from "../../ChatBubble/ChatBubble"
import { questions } from "../../../assets/questions"
import FeedbackModal from "../../Modal/FeedbackModal"
import MikaHeader from '../../../assets/mika_header.jpg';

type ChatProps = {
	host: string
	port: number
	useHttps: boolean
}

export default function Chat({}: ChatProps) {
	const firstMessage: ChatMessage = {
		fromBot: true,
		text: 'Hi, my name is MIKA. Im a chatbot and I can help you get more information about the master programs for international students at the HWR. Please write a new message for each request, keep them simple and don\'t provide any personal data.',
	}
	const chatManager = new ChatManager(firstMessage)

	return (
		<div className="max-w-[1440px] ml-auto mr-auto h-auto">
			<div className="w-full h-[200px]">
				<img
					src={MikaHeader}
					alt="Berlin School of Economics and Law Logo"
					className="h-auto w-full -mt-6" 
				/>
			</div>
			<div className="bg-white pl-40 pr-16 pb-16 grid grid-cols-3 gap-4">
				<div className="col-span-2 pr-8">
					<div className="bg-white pl-0 p-8 text-left">
						<h1 className="text-[#202020] text-5xl font-bold tracking-tight">Chat with MIKA</h1>
					</div>
					<div className="chat-container text-md text-white h-[600px] overflow-hidden rounded-md border-4 bg-white flex justify-items-end justify-end flex-col">
						
						<div className="chatview-container p-4 overflow-y-auto h-[90%]">
							<ChatView history={chatManager.getHistory()} />
						</div>
						<div className="chatbubble-container">
							<ChatBubble chatManager={chatManager} message={questions[0]} />
							<ChatBubble chatManager={chatManager} message={questions[1]} />
							<ChatBubble chatManager={chatManager} message={questions[2]} />
						</div>
						<div className="chatinput-container w-full h-[50px] text-black">
							<ChatInput chatManager={chatManager} />
						</div>
					</div>
				</div>
				<div className="col-span-1 mt-12">
					<div className="bg-gray-100 p-12 text-left">
						<p className="font-bold text-red-700">
							WARNING:
						</p><br></br>
						<p>
							Dear visitor, this chatbot is a prototype and is not yet fully functional. Please do not rely on the information provided by MIKA. We apologize for any mistakes and bugs.
						</p><br></br><br></br>
						<p className="font-bold">
							How to use MIKA:
						</p><br></br>
						<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut porta porta ullamcorper. Fusce ullamcorper urna vel consequat porttitor.
						</p><br></br>
					</div>
				</div>
			</div>
		</div>
	)
}
