import { useState, useEffect } from 'react'
import { RxCross2 } from "react-icons/rx"

const Contact = () => {
	const [name, setName] = useState<string>("")
	const [email, setEmail] = useState<string>("")
	const [message, setMessage] = useState<string>("")
	const [showModal, setShowModal] = useState<boolean>(false)
 

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
				setShowModal(true)
			} else {
				alert('Failed to send message: ' + data.error)
			}
		} catch (error) {
			console.error('Submission error:', error)
			alert('Error submitting message')
		}

		setName("")
		setEmail("")
		setMessage("")
	}

	useEffect(()=> {
		setTimeout(()=>{
			setShowModal(false)
		}, 5000)
	}, [showModal])

	const thanksModal = (
		<div className='thanks-modal'>
			<div className='modal'>
				<p>Thanks for your enquiry!</p>
				<RxCross2 onClick={()=> setShowModal(false)}/>
			</div>
		</div>
	)

    return (
        <main className="contact-us-container">
			{ showModal && thanksModal }
            <h1>Contact Us</h1>
            <p>Have any questions? Suggestions? Feedback? Let us know!</p>
            <form onSubmit={(e) => handleSubmit(e)}>
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
                <button className="submit-btn" type="submit">Submit</button>
            </form>
        </main>
    )
}

export default Contact
