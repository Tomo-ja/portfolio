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
	}

	h2{
		font-size: ${THEME.fontSize.xLarge};
		text-transform: uppercase;
		font-weight: 400;
	}

	span.blue{
		color: ${THEME.colors.lightBlue};
	}

	span.bold{
		font-weight: 700;
	}

	span.underLine {
		border-bottom: 1px solid ${THEME.colors.lightBlue};
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