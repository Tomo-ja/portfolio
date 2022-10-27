import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";

const StyledHome = styled(StyledMain)`

	padding-bottom: ${THEME.spacing.xLarge};

	p{
		margin-bottom: ${THEME.spacing.middle};
		font-size: ${THEME.fontSize.middle};
		line-height: 1.5em;
		letter-spacing: 0.025em;
	}

	.profile {
		width: 100%;
		display: flex;
		justify-content: space-between;
		margin-top: ${THEME.spacing.xLarge};
	}

	.profile__story{
		width: 60%;
		margin-right: ${THEME.spacing.large};
		float: left;
		font-family: 'Noto Serif', serif;

	}

	.first-letter{
		font-size: ${THEME.fontSize.xxLarge};
		padding: 6px 3px 5px 0px;
		margin-right: 5px;
		float: left;
	}


	@media only screen and (max-width: 1000px)  {
		p{
			font-size: ${THEME.fontSize.default};
			
		}
  }

	@media only screen and (max-width: 800px)  {
		p{
			font-size: ${THEME.fontSize.default};
			
		}
		.profile{
			flex-direction: column;
		}

		.profile__story{
			width: 100%;
			margin-right: 0;
			margin-bottom: ${THEME.spacing.large}; 
		}
  }

`

export default StyledHome