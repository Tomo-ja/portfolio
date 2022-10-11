import styled from "styled-components";
import StyledMain from "../../styles/main.styles";
import THEME from "../../styles/theme";

const StyledContact = styled(StyledMain)`


	section{
		display:flex;
	}

	.accountInfo{
		margin-left: ${THEME.spacing.xxLarge};
	}


	@media only screen and (max-width: 760px)  {
		.accountInfo{
			margin-left: ${THEME.spacing.middle};
		}
	}
`

export default StyledContact