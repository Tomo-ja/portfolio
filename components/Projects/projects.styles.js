import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";

const StyledProjects = styled(StyledMain)`

	h2{
		margin-bottom: 2em;
	}

	h3{
		color: ${THEME.colors.white};
		background-color: ${THEME.colors.black};
		margin: 0;
	}

	section{
		display: flex;
		flex-wrap: wrap;
	}

	.project{
		&__detail{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
		}

		&__title-front{
			border: 1px solid ${THEME.colors.white};
			padding: ${THEME.spacing.default};
		}

		&__title-right{
			font-size: ${THEME.fontSize.large};
			margin-bottom: ${THEME.spacing.small};
		}

		&__env{
			display: inline-block;
			margin-right: ${THEME.spacing.default};
			margin-bottom: ${THEME.spacing.large};
			color: ${THEME.colors.lightGray};
			font-family: 'Raleway', sans-serif;
			font-size: ${THEME.fontSize.small};
		}

		&__description{
			margin-bottom: ${THEME.spacing.small};
			font-family: 'Roboto', sans-serif;
			font-weight: 300;
		}

		&__external-links{
			width: 100%;
			display: flex;
			justify-content: right;
			> div {
				margin-left: ${THEME.spacing.default};
			}
		}
	}


`

export default StyledProjects