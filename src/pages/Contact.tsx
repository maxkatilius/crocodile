import React from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

const Contact = ({ db }: {db: any }) => {
	const [userName, setUserName] = React.useState("")
	const [userEmail, setUserEmail] = React.useState("")
	const [userMessage, setUserMessage] = React.useState("")


	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserName(e.target.value);
    };

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setUserEmail(e.target.value);
    };

    const handleMessageChange = (e: React.ChangeEvent<HTMLTextAreaElement>): void => {
        setUserMessage(e.target.value);
    };


	const handleSubmit = async (e: React.FormEvent) : Promise<void> => {
    	e.preventDefault();
		try {
			await addDoc(collection(db, "contact-us-messages"), {
				name: userName,
				email: userEmail,
				message: userMessage,
				timestamp: serverTimestamp(),
			});
		} catch (e) {
			console.error("Error adding document: ", e);
		}
		setUserName("")
		setUserEmail("")
		setUserMessage("")
	};

    return (
        <main className="contact-us">
            <h1>Contact Us</h1>
            <p>Have any questions? Suggestions? Feedback? <br />Let us know!</p>
            <form className="contact-form" onSubmit={(e) => handleSubmit(e)}>
                <input type="text" placeholder="Name *" value={userName} onChange={(e)=> {
					handleNameChange(e)
				}}/>
                <input type="email" placeholder="Email *" value={userEmail} onChange={(e)=> {
					handleEmailChange(e)
				}}/>
                <textarea placeholder="Message *" value={userMessage} onChange={(e)=> {
					handleMessageChange(e)
				}}></textarea>
                <button className="btn submit-btn" type="submit">Submit</button>
            </form>
        </main>
    );
};

export default Contact;
