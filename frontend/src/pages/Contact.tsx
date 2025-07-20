import React from "react"

const Contact = () => {
	const [userName, setUserName] = React.useState("")
	const [userEmail, setUserEmail] = React.useState("")
	const [userMessage, setUserMessage] = React.useState("")


	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserEmail(e.target.value)
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setUserMessage(e.target.value)
    }


	const handleSubmit = async (e: React.FormEvent) : Promise<void> => {
    	e.preventDefault()
		try {
			const response = await fetch('http://localhost:5000/api/contact', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
				body: JSON.stringify({ userName, userEmail, userMessage }),
			})
			const data = await response.json()

			if (response.ok) {
				alert('Message sent successfully!')
			} else {
				alert('Failed to send message: ' + data.error)
			}
		} catch (error) {
			console.error('Submission error:', error)
			alert('Error submitting form')
		}

		setUserName("")
		setUserEmail("")
		setUserMessage("")
	}

    return (
        <main className="contact-us">
            <h1>Contact Us</h1>
            <p>Have any questions? Suggestions? Feedback? <br />Let us know!</p>
            <form onSubmit={(e) => handleSubmit(e)}>
				<div className="form-inputs">
					<input type="text" 
						placeholder="Name *" 
						value={userName}
						required 
						onChange={(e)=> {
						handleNameChange(e)
					}}/>
					<input type="email" 
						placeholder="Email *" 
						value={userEmail} 
						required 
						onChange={(e)=> {
						handleEmailChange(e)
					}}/>
					<textarea 
						placeholder="Message *" 
						value={userMessage} 
						required 
						onChange={(e)=> {
						handleMessageChange(e)
					}}></textarea>
				</div>
                <button className="btn submit-btn" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Contact
