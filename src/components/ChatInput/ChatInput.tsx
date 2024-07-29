import { ChatManager } from "../../ChatManager"
import { ChatMessage } from "../../types/ChatMessage"
import "./ChatInput.css"

type ChatInputProps = {
	chatManager: ChatManager
}

export default function ChatInput(props: ChatInputProps) {
	return (
		<input
			type="text"
			enterKeyHint="enter"
			placeholder="Message"
			className="w-full rounded-md border-4 border-gray-400 p-2 focus:border-[#4979a6] focus:ring-0 focus:outline-none"
			onKeyDown={(e) => {
				if (e.key == "Enter" && e.currentTarget.value !== "") {
					props.chatManager.sendMessage(e.currentTarget.value)
					e.currentTarget.value = ""
				}
			}}
		/>
	)
}
