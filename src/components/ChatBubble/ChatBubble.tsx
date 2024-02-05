import React from "react"
import { ChatManager } from "../../ChatManager"
import "./ChatBubble.css"

type Props = {
	message: string
	chatManager: ChatManager
}

const ChatBubble: React.FC<Props> = (props) => {
	const handleClick = () => {
		props.chatManager.sendMessage(props.message)
	}

	return (
		<div className="chatBubble" onClick={handleClick}>
			{props.message}
		</div>
	)
}

export default ChatBubble
