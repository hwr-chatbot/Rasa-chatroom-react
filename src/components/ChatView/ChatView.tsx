import "./ChatView.css"
import { ChatMessage } from "../../types/ChatMessage"
import mika from "../../assets/mika_profilepicture.png"
import { useEffect, useRef } from "react"

type ChatViewProps = {
	history: ChatMessage[]
}

export default function ChatView(props: ChatViewProps) {
	const messagesEndRef = useRef<HTMLDivElement>(null)


	const scrollToBottom = () => {
		messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
	}

	useEffect(() => {
		scrollToBottom()
	})



	function urlify(text: string) {
		const urlRegex = /(https?:\/\/[^\s]+)/g
		return text.split(urlRegex).map((part) => {
			if (part.match(urlRegex)) {
				return (
					<a
						key={Math.random().toString()}
						className={"url break-all"}
						href={part}
						target="_blank"
						rel="noopener noreferrer"
					>
						{part}
					</a>
				)
			}
			return part
		})
	}

	return (
		<ul className="chatview-history">
			{props.history.map((element: ChatMessage, index: number) => (
				<li
					key={index}
					className={
						element.fromBot ? "chatview-bot-message" : "chatview-me-message"
					}
				>
					<span className="chatview-chatbubble">
						{element.fromBot ? (
							<img className="w-[25px] h-[25px]" src={mika} alt="Mika-Bot" />
						) : (
							""
						)}
						<span> { element.text === "..." ? (
							<div className='inline-block align-middle'>
								<div className='h-2 w-2 m-1 float-left bg-slate-200 rounded-full animate-bounce [animation-delay:-0.2s]'></div>
								<div className='h-2 w-2 m-1 float-left bg-slate-100 rounded-full animate-bounce [animation-delay:-0.1s]'></div>
								<div className='h-2 w-2 m-1 float-left bg-slate-200 rounded-full animate-bounce'></div>
					   		</div>
						) : (
							urlify(element.text)
						)
					} </span>
					</span>
				</li>
			))}
			<li>
				<div ref={messagesEndRef}></div>
			</li>
		</ul>
	)
}
