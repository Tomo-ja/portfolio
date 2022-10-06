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
					<li><Link href='/resume'>Resume</Link></li>
				</ul>
			</nav>
		</StyledHeader>
	)
}

export default Header