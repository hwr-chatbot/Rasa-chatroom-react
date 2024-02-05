import "./App.css"
import Chat from "./components/Chat"

function App() {
	return (
		<div className="app">
			<Chat host="localhost" port={5505} useHttps={true} />
		</div>
	)
}

export default App
