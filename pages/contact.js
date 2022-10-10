import Head from "next/head"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

import Form from '../components/Contact/form'

import StyledContact from '../components/Contact/contact.styles'
import StyledAccountInfo from '../components/Contact/accountInfo.styles'



const Contact = () => {

	return (
		<div>
			<Head>
				<title>Contact</title>
				<link rel='icon' href='/favicon.ico'/>
			</Head>
			<StyledContact>
				<h2>
					Say Hello<br />
					<span className='blue'>We would be delighted to hear from you</span>
				</h2>

				<section>
					<Form />
					<div className="accountInfo">
						<StyledAccountInfo href='https://www.linkedin.com/in/Tomo-ja' target='_blank'>
							<div>
								<FontAwesomeIcon icon={faLinkedinIn} color="white"/>
							</div>
							<p>https://www.linkedin.com/in/Tomo-ja</p>
						</StyledAccountInfo>
						<StyledAccountInfo href='https://github.com/Tomo-ja' target='_blank'>
							<div>
								<FontAwesomeIcon icon={faGithub} color="white"/>
							</div>
							<p>https://github.com/Tomo-ja</p>
						</StyledAccountInfo>
					</div>
				</section>
			</StyledContact>

		</div>
	)
}

export default Contact