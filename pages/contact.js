import Head from "next/head"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Form from '../components/Contact/form'

import StyledContact from '../components/Contact/contact.styles'
import StyledAccountInfo from '../components/Contact/accountInfo.styles'
import StyledIconWrapper from "../styles/iconWrapper.styles"



const Contact = () => {

	return (
		<div>
			<Head>
				<title>Contact</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<StyledContact>
				<h1>
					Say Hello<br />
					<span className='blue'>We would be delighted to hear from you</span>
				</h1>

				<section>

					<Form />

					<div className="accountInfo">
						<StyledAccountInfo href='https://www.linkedin.com/in/Tomonao' target='_blank'>
							<StyledIconWrapper>
								<FontAwesomeIcon icon={faLinkedinIn} color="white"/>
							</StyledIconWrapper>
							<p>https://www.linkedin.com/in/Tomonao</p>
						</StyledAccountInfo>
						<StyledAccountInfo href='https://github.com/Tomo-ja' target='_blank'>
							<StyledIconWrapper>
								<FontAwesomeIcon icon={faGithub} color="white"/>
							</StyledIconWrapper>
							<p>https://github.com/Tomo-ja</p>
						</StyledAccountInfo>
					</div>
				</section>
			</StyledContact>

		</div>
	)
}

export default Contact