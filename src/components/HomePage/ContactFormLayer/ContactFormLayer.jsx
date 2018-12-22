import React from 'react';
import './ContactFormLayer.scss';
import { Form, Button, Input } from 'reactstrap';

const ContactFormLayer = ({ placeholder, sendMessageText }) => {
	return (
		<div className="contact-form-layer">
			<div className="header">Send me a message</div>
			<Form>
				<textarea placeholder={placeholder.textarea}></textarea>
				<Input placeholder={placeholder.input} />
				<Button size="lg" outline color="secondary">{sendMessageText}</Button>
			</Form>
		</div>
	)
}

export default ContactFormLayer;