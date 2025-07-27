import React from "react"

const Contact = () => {
	const [name, setName] = React.useState("")
	const [email, setEmail] = React.useState("")
	const [message, setMessage] = React.useState("")


	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setName(e.target.value)
    }

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setMessage(e.target.value)
    }


	const handleSubmit = async (e: React.FormEvent) : Promise<void> => {
		console.log( name, email, message)
    	e.preventDefault()
		try {
			const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/api/contact`, {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ name, email, message }),
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

		setName("")
		setEmail("")
		setMessage("")
	}

    return (
        <main className="contact-us-container">
            <h1>Contact Us</h1>
            <p>Have any questions? Suggestions? Feedback? <br />Let us know!</p>
            <form onSubmit={(e) => handleSubmit(e)}>
				<div className="form-inputs">
					<input type="text" 
						placeholder="Name *" 
						value={name}
						required 
						onChange={(e)=> {
						handleNameChange(e)
					}}/>
					<input type="email" 
						placeholder="Email *" 
						value={email} 
						required 
						onChange={(e)=> {
						handleEmailChange(e)
					}}/>
					<textarea 
						placeholder="Message *" 
						value={message} 
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
