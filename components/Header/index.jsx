import Image from "next/image";
import Link from 'next/link';
import AnchorLink from "react-anchor-link-smooth-scroll";

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
					<li><AnchorLink href='#projects'>Home</AnchorLink></li>
					<li><AnchorLink href='#profile'>Profile</AnchorLink></li>
					<li><AnchorLink href='#contact'>Contact</AnchorLink></li>
					<li><a href='/Resume.pdf' target='_blank' rel="noopener noreferrer">Resume</a></li>
				</ul>
			</nav>
		</StyledHeader>
	)
}

export default Header