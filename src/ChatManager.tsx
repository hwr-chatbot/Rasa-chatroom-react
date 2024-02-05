import { useState } from "react"
import { ChatMessage } from "./types/ChatMessage"

type ChatHistory = {
	history: ChatMessage[]
}

const requestOptions: RequestInit = {
	method: "POST",
	mode: "cors",
}

type RasaApiResponse = {
	text: string
	image: string
	recipient: string
}

export class ChatManager {
	private chatHistory
	private setChatHistory

	constructor(firstMessage: ChatMessage) {
		const [chatState, setChatState] = useState<ChatHistory>({
			history: [firstMessage],
		})
		this.chatHistory = chatState
		this.setChatHistory = setChatState
	}

	getHistory() {
		return this.chatHistory.history
	}

	sendMessage(message: string) {
		console.log("sendMessage")
		this.chatHistory.history.push({ text: message, fromBot: false })
		this.setChatHistory({
			history: this.chatHistory.history,
		})
		fetch("http://localhost:5005/webhooks/rest/webhook", {
			...requestOptions,
			body: JSON.stringify({
				sender: "lucas",
				message: message,
			}),
		})
			.then((raw) => raw.json())
			.then((data: any[]) => {
				let response: string = data
					.map((response: any) => {
						if (response.text !== undefined) return response.text
						if (response.image !== undefined) return response.image
					})
					.join("\r\n")

				this.chatHistory.history.push({ text: response, fromBot: true })
				this.setChatHistory({
					history: this.chatHistory.history,
				})
			})
			.catch(function (error) {
				console.log("Error while fetching!\n" + error)
			})
	}
}
