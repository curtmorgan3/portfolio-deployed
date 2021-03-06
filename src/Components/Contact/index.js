import React from 'react';
import { FormControl, FormGroup, Button, Alert } from 'react-bootstrap';
import ParticleWrapper from '../ParticlesWrapper';
import * as emailjs from 'emailjs-com';
import './stylesheet.css';

class Contact extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			message:'',
			showAlert: false,
		}
		this.handleChange = this.handleChange.bind(this);
		this.getValidationState = this.getValidationState.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleDismiss = this.handleDismiss.bind(this);
	}

	handleChange(e){
		this.setState({
			[e.target.name]: e.target.value
		})
	}
	async handleSubmit(e){
		const isValid = this.getValidationState();
		if (isValid === 'success'){
			const templateParams = {
				name: this.state.name,
				email: this.state.email,
				message: this.state.message,
			}
			await emailjs.send('gmail', 'template_WybFlKmz', templateParams, `user_GZQWMLe7UdB2B37J4nwin`)
			this.setState({
				name:'',
				email:'',
				message:'',
			})
			window.location.reload();
		} else if (isValid === 'error'){
			this.setState({
				showAlert: true
			})
		}
	}
	handleDismiss(){
		this.setState({
			showAlert: false
		})
	}
	getValidationState(){
		const email = this.state.email;
		if (email.includes('@') && email.length > 5 && !email.includes(' ')){
			return 'success';
		} else {
			return 'error'
		}
	}
	render(){
		return(
			<div className='contact'>
				{this.state.showAlert ?
					<Alert 	bsStyle='danger'
									id='contact-alert'>
						<h4>Invalid Email</h4>
						<p>I want to get back to you as soon as possible.
							 Please leave a valid email addresss.</p>
					<Button onClick={this.handleDismiss}
						>Got it</Button>
					</Alert>
				: null}
				<div className='contact-wrap'>
					<form className='contact-form'>
						<h3>Need something built? Let's get started</h3>
						<p>Tell me below what you have in mind and I'll reach out to you
							 as soon as I can</p>
						<FormControl
							type='text'
							name='name'
							placeholder='Your Name'
							onChange={this.handleChange}
						/>
						<FormGroup
							validationState={this.getValidationState()}
						>
						<FormControl
							type='email'
							name='email'
							placeholder='Your Email'
							onChange={this.handleChange}
						/>
						</FormGroup>
						<FormControl
							componentClass='textarea'
							id='contact-message'
							name='message'
							placeholder='Your Message'
							onChange={this.handleChange}
						/>
					</form>
					<Button
						onClick={this.handleSubmit}
					>Send</Button>
				</div>
				<ParticleWrapper />
			</div>
		)
	}
};

export default Contact;
