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
		justify-content: center;
		flex-wrap: wrap;
	}

	.project{
		&__detail{
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			padding: ${THEME.spacing.default};
		}

		&__title-front{
			padding: ${THEME.spacing.default};
		}

		&__title-right{
			background-color: ${THEME.colors.green};
			font-size: ${THEME.fontSize.large};
			margin-bottom: ${THEME.spacing.small};
		}

		&__env{
			margin-bottom: ${THEME.spacing.middle};

			span{
				display: inline-block;
				color: ${THEME.colors.black};
				font-family: 'Raleway', sans-serif;
				font-size: ${THEME.fontSize.small};
				font-weight: bold;
				margin-right: ${THEME.spacing.default};

			}
		}

		&__description{
			margin-bottom: ${THEME.spacing.small};
			font-family: 'Roboto', sans-serif;
			font-weight: 300;
			overflow-y: scroll;
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

	@media only screen and (max-width: 895px)  {
		p{
			font-size: ${THEME.fontSize.small};
		}
		.project__env{
			margin-block: ${THEME.spacing.default}
		}
  }

	@media only screen and (max-width: 705px)  {
		p{
			font-size: ${THEME.fontSize.default};
		}
  }

	@media only screen and (max-width: 465px)  {
		p{
			font-size: ${THEME.fontSize.small};
		}
  }

`

export default StyledProjects