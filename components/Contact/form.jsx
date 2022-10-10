import { useState } from "react";
import emailjs from 'emailjs-com'


import StyledForm from "./form.styles";

const isEmailValid = (email) => {
	return /\S+@\S+\.\S+/.test(email)
}



const Form = () => {
	
	const [errors, setErrors] = useState({nameError: true, emailError: true, messageError: true})
	const [emailInfo, setEmailInfo] = useState({name: null, email: null, message: null})


	const onChangeName = (e) => {
		if (e.target.value.trim() === "") {
			setErrors(prev =>  {return {...prev, nameError: true}})
		} else {
			setErrors(prev =>  {return {...prev, nameError: false}})
		}
		setEmailInfo(prev => {return {...prev, name: e.target.value}})
	}

	const onChangeEmail = (e) => {
		if (e.target.value.trim() === "") {
			setErrors(prev =>  {return {...prev, emailError: true}})
		} else if (!isEmailValid(e.target.value)) {
			setErrors(prev =>  {return {...prev, emailError: true}})
		} else {
			setErrors(prev =>  {return {...prev, emailError: false}})
		}
		setEmailInfo(prev => {return {...prev, email: e.target.value}})
	}

	const onChangeMessage = (e) => {
		if (e.target.value.trim() === "") {
			setErrors(prev =>  {return {...prev, messageError: true}})
		} else {
			setErrors(prev =>  {return {...prev, messageError: false}})
		}
		setEmailInfo(prev => {return {...prev, message: e.target.value}})
	}

	const sendEmail = (e) => {
		e.preventDefault()
		
		emailjs.send(process.env.EMAIL_SERVICE_ID, "template_q7ukh3j", emailInfo, process.env.EMAIL_KEY)
		.then(response => {
			console.log('success')
		})
		.catch(error => {
			console.log(error)
		})
	}

	return(
		<StyledForm>
			<div className='form__group'>
				<input 
					type="text" 
					className='form__input'
					id='guestName'
					onChange={onChangeName}
					required
				/>
				<span className='form__border'></span>
				<label htmlFor="guestName" className='form__label'>How can I call you?</label>
			</div>
			<div className='form__group'>
				<input 
					type="text" 
					className='form__input'
					id='guestEmail'
					onChange={onChangeEmail}
					required 
				/>
				<span className='form__border'></span>
				<label htmlFor='guestEmail' className='form__label'>What&apos;s your email address?</label>
			</div>
			<div className='form__group'>
				<textarea 
					id='message'
					className='form__input'
					rows="6"
					onChange={onChangeMessage}
					required
				/>
				<span className='form__border'></span>
				<label htmlFor='message' className='form__label'>What&apos;s your message?</label>
			</div>
			<button 
				className='form__button'
				disabled={!Object.values(errors).every(value => value !== true)}
				onClick={sendEmail}
			>
				Send
			</button>
		</StyledForm>
	)
}

export default Form

