import styled from "styled-components";
import StyledImage from "../../styles/image.styles";
import { floatingUpAnimation } from "../../styles/animations.styles";
import THEME from "../../styles/theme";

const StyledProfileImage = styled(StyledImage)`
	width: max(250px, 40%);
	display:block;
	aspect-ratio: 1;
	margin-bottom: ${THEME.spacing.default};

	border: 4px solid ${THEME.colors.lightBlue};
	border-radius: ${THEME.radius.large};
	box-shadow: 2px -1px 20px -5px rgba(128,207,241,0.75);
	
	animation-name: ${floatingUpAnimation};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;


	@media only screen and (max-width: 880px)  {
		margin-bottom: ${THEME.spacing.default};
  }

	@media only screen and (max-width: 800px)  {
		width: 100%;
		margin-bottom: ${THEME.spacing.small};
  }
`


export default StyledProfileImage