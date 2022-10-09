import Image from "next/image";
import Link from 'next/link';

import StyledHeader from "./header.styles";
import LogoImage from './logo.styles';

const Header = () => {

	return (
		<StyledHeader>
			<nav>
				<LogoImage width="100px" height='65px'>
					<Image
						src='/logo.png'
						alt="logo"
						layout="fill"
						objectFit="cover"
					/>
				</LogoImage>
				
				<ul>
					<li><Link href='/'>Home</Link></li>
					<li><Link href='/projects'>Projects</Link></li>
					<li><Link href='/contact'>Contact</Link></li>
					<li><a href='/Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a></li>
				</ul>
			</nav>
		</StyledHeader>
	)
}

export default Header