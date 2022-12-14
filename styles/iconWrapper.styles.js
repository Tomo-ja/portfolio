import styled from "styled-components";
import THEME from "./theme";

const StyledIconWrapper = styled.div`

	width: 40px;
	height: 40px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: ${THEME.colors.black};
	border: 1px solid ${props => props.onProject ? THEME.colors.black : THEME.colors.lightBlue};
	transition: all 0.25s;

	svg{
		display: block;
		width: 20px;
		transition: all 0.25s;
	}

	:hover{
		background-color: ${props => props.onProject ? THEME.colors.white : THEME.colors.lightBlue};

		svg{
			color: ${THEME.colors.black};
		}
	}

`

export default StyledIconWrapper