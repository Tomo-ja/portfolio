import styled from "styled-components";
import THEME from "./theme";


const StyledMain = styled.main `

	width: 90%;
	max-width: 1220px;
	margin: auto;

	color: ${THEME.colors.white};

	h1{
		font-size: ${THEME.fontSize.xxLarge};
		text-transform: uppercase;
		font-weight: 400;
		margin-bottom: 1em;
	}

	h2{
		font-size: ${THEME.fontSize.xLarge};
		text-transform: uppercase;
		font-weight: 400;
		margin-bottom: 2em;
	}

	span.blue{
		color: ${THEME.colors.lightBlue};
	}

	span.light-red{
		color: ${THEME.colors.lightRed};
	}

	span.yellow{
		color: ${THEME.colors.yellow};
	}

	span.bold{
		font-weight: 700;
	}

	span.underLine {
		border-bottom: 2px solid ${THEME.colors.yellow};
		cursor: pointer;
	}

	@media only screen and (max-width: 565px)  {
		h1{
			font-size: ${THEME.fontSize.xLarge};
		}

		h2{
			font-size: ${THEME.fontSize.middle};
		}
  }

`

export default StyledMain