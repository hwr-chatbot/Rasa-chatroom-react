import { useEffect, useRef, useState } from "react"
import React from "react"
import "./Content.css"

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
						<li>Seit wann gibt es die Hochschule schon?</li>
						<li>Wo ist die HWR?</li>
						<li>Was bedeutet die Abkürzung "HWR"?</li>
						<li>Welche Studiengänge gibt es?</li>
						<li>Braucht man für alle Studiengänge ein Abitur?</li>
						<li>Welche Voraussetzungen gelten für ein duales Studium?</li>
						<li>
							Welche Voraussetzungen gelten für Studierende aus dem Ausland?
						</li>
						<li>Kann man schon vor seinem Studium an Kursen teilnehmen?</li>
						<li>Ich möchte zur HWR wechseln, geht das?</li>
						<li>Gibt es englische Studiengänge?</li>
						<li>Kann ich mich als Gasthörer anmelden?</li>
					</ul>
				</span>
			</div>
		</>
	)
}
