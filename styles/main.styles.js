import styled from "styled-components";
import THEME from "./theme";


const StyledMain = styled.main `

	width: 90%;
	max-width: 1220px;
	margin: auto;

	color: ${THEME.colors.white};

	h1{
		font-size: ${THEME.fontSize.xxLarge};
	}

	span.blue{
		color: ${THEME.colors.lightBlue};
	}

	span.bold{
		font-weight: 700;
	}

	@media only screen and (max-width: 565px)  {
		h1{
			font-size: ${THEME.fontSize.xLarge};
		}
  }

`

export default StyledMain