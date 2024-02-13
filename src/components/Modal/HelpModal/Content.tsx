import { useEffect, useRef, useState } from "react"
import React from "react"
import "./Content.css"
import { questions } from "../../../assets/questions"

export default function Content() {
	return (
		<>
			<div className="content">
				<h2>MIKA</h2>
				<span>
					Dieser Chatbot entstand im Rahmen mehrerer Studienarbeiten von
					Studenten der HWR Berlin. Er kann Fragen zu verschiedenen Themen mit
					Bezug auf die HWR beantworten.
					<br /> <br />
					Einige Fragen sind:
					<ul className="questions">
						{questions.map((question) => (
							<li>{question}</li>
						))}
					</ul>
				</span>
			</div>
		</>
	)
}
