import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";

const StyledHome = styled(StyledMain)`

	max-width: 980px;

	p{
		margin-bottom: ${THEME.spacing.default};
		font-size: ${THEME.fontSize.middle};
		line-height: 1.2em;
		letter-spacing: 0.025em;
	}

	.profile {
		width: 100%;
		margin-top: ${THEME.spacing.xLarge};
	}

	.profile__story{
		font-family: 'Roboto', sans-serif;
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

	@media only screen and (max-width: 760px)  {
		p{
			font-size: ${THEME.fontSize.default};
			
		}
		.profile__story{
			margin-block: ${THEME.spacing.large}; 
		}
  }

	
`

export default StyledHome