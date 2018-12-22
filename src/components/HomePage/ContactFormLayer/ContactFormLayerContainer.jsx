import React, { Component } from 'react';
import ContactFormLayer from './ContactFormLayer';

class ContactFormLayerContainer extends Component {
	constructor() {
		super();
		this.placeholder = {
			textarea: "Ask me anything or leave your thought...",
			input: "I can reply on your email...",
		}
		this.sendMessageText = "Send";
	}

	render() {
		return (
			<ContactFormLayer placeholder={this.placeholder} sendMessageText={this.sendMessageText} />
		);
	}
}

export default ContactFormLayerContainer;