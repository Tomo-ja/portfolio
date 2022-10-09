import styled from "styled-components";
import StyledImage from "../../styles/image.styles";
import { floatingUpAnimation } from "../../styles/animations.styles";
import THEME from "../../styles/theme";

const StyledProfileImage = styled(StyledImage)`
	width: max(300px, 40%);
	display:block;
	float: left;
	aspect-ratio: 1;
	margin-right: ${THEME.spacing.xxLarge};
	margin-bottom: ${THEME.spacing.default};

	border: 4px solid ${THEME.colors.lightBlue};
	border-radius: ${THEME.radius.large};
	box-shadow: 2px -1px 70px -8px rgba(128,207,241,0.75);
	
	animation-name: ${floatingUpAnimation};
	animation-duration: 1s;
	animation-fill-mode: forwards;
	animation-timing-function: ease-in-out;


	@media only screen and (max-width: 880px)  {
		margin-right: ${THEME.spacing.large};
		margin-bottom: ${THEME.spacing.default};
  }
	@media only screen and (max-width: 650px)  {
		width: max(150px, 40%);
		margin-right: ${THEME.spacing.default};
		margin-bottom: ${THEME.spacing.small};
  }

`


export default StyledProfileImage