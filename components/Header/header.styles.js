import styled from "styled-components";
import THEME from "../../styles/theme";


const StyledHeader = styled.header`

	width: 90%;
	max-width: 1220px;
	margin-inline: auto;
	padding-block: ${THEME.spacing.default};

	font-family: 'Raleway', sans-serif;

	nav{
		display: flex;
		width: 100%;
		height: 100%;
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

