import styled, { ThemeConsumer } from "styled-components";
import THEME from "../../styles/theme";


const StyledHeader = styled.header`

	width: 100vw;
	padding-block: ${THEME.spacing.default};
	background-color: ${THEME.colors.black};
	position: fixed;
	top: 0;
	z-index: 999;

	font-family: 'Raleway', sans-serif;

	nav{
		display: flex;
		width: 90%;
		max-width: 1220px;
		height: 100%;
		margin-inline: auto;
		justify-content: space-between;
		align-items: center;
	}

	ul{
		display: flex;
		margin: 0;
		padding: 0;
	}

	li{
		margin-left: ${THEME.spacing.large};
		color: ${THEME.colors.lightBlue};
	}

	a{
		position: relative;

		::after{
			content: '';
			position: absolute;
			width: 0;
			height: 3px;
			left: 50%;
			bottom: -10px;
			background-color: ${THEME.colors.lightBlue};
			transition: all ease-in-out .2s;
		}
		:hover::after{
			width: 100%;
			left: 0;
		}
	}

	@media only screen and (max-width: 565px) {
		padding-block: ${THEME.spacing.small};

		li{
			margin-left: ${THEME.spacing.default};
			font-size: ${THEME.fontSize.xSmall};

		}
  }
`

export default StyledHeader

