import { Ref, useEffect, useRef, useState } from "react"
import React from "react"
import "./ModalWindow.css"
import Content from "./Content"

export default function ModalHelp() {
	const [show, setShow] = useState<boolean>(false)

	function useOutsideAlerter(ref: { current: any }) {
		useEffect(() => {
			function handleClickOutside(event: { target: any }) {
				if (show && ref.current && !ref.current.contains(event.target)) {
					setShow(() => false)
					let modal = document.getElementById("modal")
					if (modal != undefined) {
						modal.scrollTop = 0
					}
				}
			}
			document.addEventListener("mousedown", handleClickOutside)
			return () => {
				document.removeEventListener("mousedown", handleClickOutside)
			}
		}, [ref, show])
	}

	const wrapperRef = useRef(null)
	useOutsideAlerter(wrapperRef)

	return (
		<>
			{show ? <div id="page-mask"></div> : <></>}
			<div ref={wrapperRef}>
				<button className="showButton" onClick={() => setShow((show) => !show)}>
					?
				</button>
				{show ? (
					<div id="modal" className="modal">
						<div
							onClick={() => setShow((show) => false)}
							className="closeButton"
						>
							✖
						</div>

						<Content />
					</div>
				) : (
					<div></div>
				)}
			</div>
		</>
	)
}
