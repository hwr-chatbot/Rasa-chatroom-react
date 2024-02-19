import './Content.css'
import React, { useRef } from 'react'

export default function Content() {
  const formRef = useRef<HTMLFormElement>(null)

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (document.getElementById('email') as HTMLInputElement).value
    const message = (document.getElementById('message') as HTMLInputElement)
      .value

    // TODO: Send the feedback to the server

    if (formRef.current) {
      formRef.current.submit()
    }
  }

  return (
    <>
      <div className='content'>
        <h2>Feedback zu MIKA</h2>
        <form ref={formRef} onSubmit={handleSubmit}>
          <div className='input-group'>
            <label htmlFor='email'>Ihre Email</label>
            <input type='email' id='email' />
          </div>
          <div className='input-group'>
            <label htmlFor='message'>Nachricht</label>
            <textarea id='message' />
          </div>
          <button type='submit' className='submit-btn'>
            Absenden
          </button>
        </form>
      </div>
    </>
  )
}
