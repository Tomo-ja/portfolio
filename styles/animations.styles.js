import { keyframes, Keyframes } from "styled-components";
import THEME from "./theme";

export const floatingUpAnimation = keyframes`
	0%{ 
		transform: translateY(50px); 
		opacity: 0;
	}
	100%{
		transform: translateY(0px); 
		opacity: 1;
	}
`


export const skillNamePopup = keyframes`
	0%{
		width: 0;
		padding: 0;
		border: none;
		transform: translateY(10px) ;
		color: ${THEME.colors.black};
		opacity: 0;
		z-index: 0;
	}
	100%{
		width: max-content;
		padding: ${THEME.spacing.small};
		border: 2px solid ${THEME.colors.lightBlue};
		transform: translateY(40px);
		color: ${THEME.colors.white};
		opacity: 1;
		z-index: 20;
	}
`