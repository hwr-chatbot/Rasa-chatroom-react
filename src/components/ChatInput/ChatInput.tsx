import { ChatManager } from "../../ChatManager"
import { ChatMessage } from "../../types/ChatMessage"
import "./ChatInput.css"

type ChatInputProps = {
	chatManager: ChatManager
}

export default function ChatInput(props: ChatInputProps) {
	return (
		<input
			autoFocus
			type="text"
			enterKeyHint="enter"
			placeholder="Message"
			className="input-field"
			onKeyDown={(e) => {
				if (e.key == "Enter" && e.currentTarget.value !== "") {
					props.chatManager.sendMessage(e.currentTarget.value)
					e.currentTarget.value = ""
				}
			}}
		/>
	)
}
