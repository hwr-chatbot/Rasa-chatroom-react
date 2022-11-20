import {ChatMessage} from "../../types/ChatMessage";
import "./ChatInput.css"

type ChatInputProps = {
    history: ChatMessage[]
    updateHistoryFunction: Function
}

type RasaApiResponse = {
    text: string,
    image: string,
    recipient: string
}

const requestOptions: RequestInit = {
    method: "POST",
    mode: "cors",
}

export default function ChatInput(props: ChatInputProps) {
    return <input type="text" enterKeyHint="enter" placeholder="Message" className="input-field" onKeyDown={(e) => {
        if (e.key == "Enter" && e.currentTarget.value !== "") {
            props.history.push({text: e.currentTarget.value, fromBot: false})
            props.updateHistoryFunction({
                history: props.history
            })

            fetch("http://localhost:5005/webhooks/rest/webhook", {
                ...requestOptions,
                body: JSON.stringify({sender: "lucas", message: e.currentTarget.value})
            })
                .then((raw) => raw.json())
                .then((data: RasaApiResponse[]) => {

                    let response: string = data.map((response: RasaApiResponse) => {
                        if (response.text !== undefined)
                            return response.text
                    }).join("\r\n")

                    props.history.push({text: response, fromBot: true})
                    props.updateHistoryFunction({
                        history: props.history
                    })
                })

            e.currentTarget.value = ""
        }
    }}/>
}